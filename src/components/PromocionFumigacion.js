import React from 'react';
import { PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';  

const PromocionFumigacion = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-grow mb-6 md:mb-0 md:mr-6 text-center md:text-left">
          <h1 className="text-3xl font-mono text-gray-800 mb-2">Servicio de Control de Plagas</h1>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <ShieldCheckIcon className="h-6 w-6 text-white mr-2" />
            <p className="text-lg font-mono text-white">
            <span className="bg-yellow-300 text-gray-800 font-bold px-2 py-1 rounded-md">Garantía de 6 meses para aplicaciones residenciales</span>
            </p>
          </div>
          <p className="text-base text-white">
            Nos especializamos en el control de plagas con técnicas seguras y efectivas. 
            ¡Llame hoy y obtenga una garantía de 6 meses en nuestro servicio!
          </p>
        </div>
        <div className="flex-shrink-0 text-center md:text-left">
          <p className="text-lg font-mono text-white mb-2 flex items-center justify-center md:justify-start">
            <PhoneIcon className="h-6 w-6 text-white mr-2" />
            Teléfono:
          </p>
          <a href="tel:+3011783097" className="text-2xl font-bold text-yellow-300 hover:underline">
            +57 3011783097
          </a>
          <a href="tel:+3011783097" className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromocionFumigacion;
