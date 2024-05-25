import React from 'react';
import { Link } from 'react-router-dom';

function Service() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };

  return (
    <section id="services" className="p-8 bg-gray-100">
      <h2 className="font-mono text-3xl font-bold text-center">NUESTROS SERVICIOS</h2>
      <p className="text-center mt-4 max-w-2xl mx-auto">Somos expertos en el control de plagas y ofrecemos soluciones efectivas para hogares y negocios. Nuestros servicios incluyen fumigación, control de cucarachas, roedores, tratamiento de termitas, entre otros. Protegemos tu espacio para que puedas vivir y trabajar sin preocupaciones.</p>
      <Link to="/servicios" >
        <button onClick={handleScrollToTop} className="block mt-8 mx-auto bg-gray-800 text-white px-6 py-3 rounded">Descubre más</button>
      </Link>
    </section>
  );
}

export default Service;

