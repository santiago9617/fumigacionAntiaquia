import React from 'react';
import logoWhatsApp from '../img/logo1-de-whatsapp.png';

export const openWhatsAppChat = () => {
  const mensaje = encodeURIComponent("Hola FumiPlagas J.R. Necesito información sobre sus servicios de control de plagas.");
  window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
};

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 z-10 cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-green-500 opacity-75 animate-pulse"></div>
      </div>
      <img
        src={logoWhatsApp}
        alt="WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative"
        onClick={openWhatsAppChat}
      />
    </div>
  );
};

export default WhatsAppButton;
