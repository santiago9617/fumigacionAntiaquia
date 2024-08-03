import React from 'react';
import { openWhatsAppChat } from './WhatsAppButton';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">FUMIPLAGAS JR</h2>
          <p>Medellin - Envigado - Sabaneta - Itagüi - Bello (Valle de Aburrá )</p>
          <p className="mt-2 text-gray-400">Soluciones innovadoras para el control de plagas</p>
          <button onClick={openWhatsAppChat}>
            <p className="mt-2 text-gray-400">Whatsapp: 3014894440</p>
          </button>
          <br/>
          <a href="mailto:fumiplagasjr@gmail.com" className="mt-2 text-gray-400">Email: fumiplagasjr@gmail.com</a>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="#inicio" className="mx-2 text-gray-400 hover:text-white">Inicio</a>
          <a href="#services" className="mx-2 text-gray-400 hover:text-white">Servicios</a>
          <a href="#clients" className="mx-2 text-gray-400 hover:text-white">Clientes</a>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-400">&copy; 2024 FUMIPLAGAS JR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
