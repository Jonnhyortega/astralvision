import { useState, useCallback } from 'react';

export const useMetaEvents = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const trackEvent = useCallback(async (eventName, eventData = {}, userData = {}) => {
    setLoading(true);
    setError(null);

    try {
      // Preparar los datos
      const payload = {
        event_name: eventName,
        event_source_url: window.location.href,
        action_source: "website",
        user_data: userData, // El backend se encargará de hashear email (em), teléfono (ph), etc.
        custom_data: eventData
      };

      // Enviar al proxy
      const response = await fetch('/api/meta-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Error enviando evento a Meta');
      }

      console.log(`Evento Meta '${eventName}' enviado con éxito`, data);
      return data;

    } catch (err) {
      console.error(`Error enviando evento Meta '${eventName}':`, err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { trackEvent, loading, error };
};
