import React from 'react';
import logoWhatsApp from '../img/logo1-de-whatsapp.png';

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    const mensaje = encodeURIComponent("Hola, me gustaría recibir más información sobre los servicios que ofrece Fumiplagas. ¿Podrían proporcionarme detalles sobre sus servicios de fumigación y el proceso de solicitud? Quedo a la espera de su respuesta. Gracias");
    window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-10 cursor-pointer">
  <img
    src={logoWhatsApp}
    alt="WhatsApp"
    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    onClick={openWhatsAppChat}
  />
</div>

  );
};

export default WhatsAppButton;
