const API_URL = import.meta.env.VITE_API_URL;

async function callChatAPI(message, history = [], context = "") {
  try {
    // 🧩 El backend exige estos tres campos
    const payload = {
      message: message || "",
      history: history || [],
      context: context || "astralvision", // Valor por defecto
    };

    const res = await fetch(`${API_URL}/api/chat/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Error del servidor:", errorText);
      throw new Error(`API error ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    console.log("✅ Respuesta del chatbot:", data);

    // La API suele devolver "response" o "reply"
    return data.response || data.reply || "Sin respuesta del servidor.";
  } catch (error) {
    console.error("🚨 callChatAPI error:", error);
    return "Hubo un problema al conectar con el servidor.";
  }
}

export default callChatAPI;
