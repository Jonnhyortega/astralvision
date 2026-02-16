import crypto from 'crypto';

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Ajustar esto en producción al dominio real
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { event_name, event_source_url, user_data, custom_data, action_source } = req.body;

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error('Faltan variables de entorno META_PIXEL_ID o META_ACCESS_TOKEN');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Hashear datos de usuario si existen (SHA-256)
    const processedUserData = { ...user_data };
    
    // Lista de campos que requieren hashing según Meta
    const fieldsToHash = ['em', 'ph', 'ge', 'db', 'ln', 'fn', 'ct', 'st', 'zp', 'country'];
    
    fieldsToHash.forEach(field => {
      if (processedUserData[field]) {
        // Normalizar y hashear
        // Ejemplo simple: email debe ser minúsculas y sin espacios antes de hashear
        let value = processedUserData[field].toString().trim().toLowerCase();
        processedUserData[field] = crypto.createHash('sha256').update(value).digest('hex');
      }
    });

    // Agregar client_ip y client_user_agent si no vienen en user_data
    // Vercel provee la IP en req.headers['x-forwarded-for']
    if (!processedUserData.client_ip) {
       const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
       if (ip) processedUserData.client_ip = ip.split(',')[0]; // Tomar la primera IP si hay lista
    }

    if (!processedUserData.client_user_agent) {
      processedUserData.client_user_agent = req.headers['user-agent'];
    }

    const payload = {
      data: [
        {
          event_name: event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: action_source || "website",
          event_source_url: event_source_url,
          user_data: processedUserData,
          custom_data: custom_data,
        },
      ],
      // test_event_code: 'TEST12345' // Descomentar para probar con la herramienta de pruebas de Meta
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de Meta:', data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Error procesando el evento:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
