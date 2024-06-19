import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/0c494c_ffac549aa52f49cf9b762bb1f76e30a3~mv2.webp';

function Header() {
  return (
    <header id='inicio' className="bg-sky-900 text-white p-4 flex justify-center">
      <nav className="max-w-4xl w-full flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto mr-4" /> {/* Ajusta la clase 'h-12' y 'mr-4' según el tamaño deseado */}
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
