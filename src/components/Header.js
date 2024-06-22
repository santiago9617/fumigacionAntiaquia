import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Logo-FUMIPLAGAS-JR.jpg';

function Header() {

  const openWhatsAppChat = () => {
    const mensaje = encodeURIComponent("Buen día, me gustaría recibir más información sobre los servicios que ofrece Fumiplagas. ¿Podrían proporcionarme detalles sobre sus servicios de fumigación y el proceso de solicitud? Quedo a la espera de su respuesta. Gracias");
    window.open(`https://wa.me/573011783097?text=${mensaje}`, '_blank');
  };

  return (
    <header id='inicio' className="bg-orange-600 text-white p-4 flex justify-center">
      <nav className="max-w-4xl w-full flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-24 w-auto mr-4" /> {/* Ajusta la clase 'h-12' y 'mr-4' según el tamaño deseado */}
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
            <a> <button onClick={openWhatsAppChat}>Contacto</button></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
