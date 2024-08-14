import React from 'react';
import logoWhatsApp from '../img/logo1-de-whatsapp.png';
import phoneIcon from '../img/telefono.png';

// Función para abrir el chat de WhatsApp
export const openWhatsAppChat = () => {
  const mensaje = encodeURIComponent("Hola FumiPlagas J.R. Necesito información sobre sus servicios de control de plagas.");
  window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
};

// Función para realizar una llamada telefónica
export const makePhoneCall = () => {
  window.open('tel:+573014894440'); 
};

// Componente para el botón de WhatsApp
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 lg:bottom-20 lg:right-20 z-10 cursor-pointer">
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

// Componente para el botón de llamada telefónica
const PhoneCallButton = () => {
  return (
    <div className="fixed bottom-36 right-8 sm:bottom-44 sm:right-12 md:bottom-52 md:right-16 lg:bottom-72 lg:right-20 z-10 cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-green-500 opacity-75 animate-pulse">🪰</div>
      </div>
      <img
        src={phoneIcon}
        alt="Telefono"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative"
        onClick={makePhoneCall}
      />
    </div>
  );
};

// Exportar ambos componentes
export { PhoneCallButton, WhatsAppButton };
