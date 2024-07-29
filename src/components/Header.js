import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logoSinFondo.png';
import { openWhatsAppChat } from './WhatsAppButton';

function Header() {
  return (
    <header id='inicio' className="bg-orange-100 text-gray-800 p-2 flex justify-center">
      <nav className="max-w-4xl w-full flex justify-between items-center">
        <img src={logo} alt="Logo" className="max-h-28 max-w-xs w-auto mr-4" /> 
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="text-lg font-semibold hover:text-orange-600">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="text-lg font-semibold hover:text-orange-600">
              Servicios
            </Link>
          </li>
          <li>
            <button onClick={openWhatsAppChat} className="text-lg font-semibold hover:text-orange-600">
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
