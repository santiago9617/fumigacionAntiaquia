import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header  id='inicio' className="bg-sky-900 text-white p-4 flex justify-center">
      <nav className="max-w-4xl w-full flex justify-between items-center">
        <div className="font-bold">FUMIPLAGAS JR</div>
        <ul className="flex items-center space-x-4">
          <Link to="/">
            Inicio
          </Link>
          <Link to="/servicios">
            Servicios
          </Link>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
