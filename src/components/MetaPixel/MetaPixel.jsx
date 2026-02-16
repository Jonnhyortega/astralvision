import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMetaEvents } from '../../hooks/useMetaEvents';

const MetaPixel = () => {
  const location = useLocation();
  const { trackEvent } = useMetaEvents();

  useEffect(() => {
    // Trackeamos PageView en cada cambio de ruta
    trackEvent('PageView');
  }, [location, trackEvent]);

  return null;
};

export default MetaPixel;
