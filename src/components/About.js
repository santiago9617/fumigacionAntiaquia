import React from 'react';
import Image from '../img/pexels-kacper-wolski-345137-950149.jpg';

function About() {

    
        const openWhatsAppChat = () => {
          const mensaje = encodeURIComponent("Hola, me gustaría recibir más información sobre los servicios que ofrece Fumiplagas. ¿Podrían proporcionarme detalles sobre sus servicios de fumigación y el proceso de solicitud? Quedo a la espera de su respuesta. Gracias");
          window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
        };
  return (
    <div className="relative h-screen bg-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Image})`, opacity: '0.3' }}></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center text-black">
          <h2 class="font-mono text-3xl font-bold text-gray-800">SOBRE FUMIPLAGAS JR</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-800">En FUMIPLAGAS JR, nos dedicamos a proteger tu entorno contra las plagas. Nuestro equipo altamente calificado utiliza técnicas avanzadas para garantizar resultados efectivos. Conoce más sobre nuestra historia, nuestros valores y por qué somos la mejor opción para tus necesidades de control de plagas.</p>
          <button onClick={openWhatsAppChat} className="mt-8 bg-transparent text-gray-800 px-6 py-3 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Contáctanos</button>
        </div>
      </div>
    </div>
  );
}

export default About;
