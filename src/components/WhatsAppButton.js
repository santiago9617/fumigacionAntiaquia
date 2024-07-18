
import React from 'react';
import logoWhatsApp from '../img/logo1-de-whatsapp.png';

export const openWhatsAppChat = () => {
  const mensaje = encodeURIComponent("Hola FumiPlagas J.R. Necesito información sobre sus servicios de control de plagas.");
  window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
};

const WhatsAppButton = () => {
  return (
    <div id="whatsapp-button" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 z-10 cursor-pointer">
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
