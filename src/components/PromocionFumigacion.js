import React from 'react';
import { PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';  

const PromocionFumigacion = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-slate-50 to-slate-50 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-grow mb-6 md:mb-0 md:mr-6 text-center md:text-left">
          <h1 className="text-3xl font-mono text-stone-950 mb-2">Servicio de Control de Plagas</h1>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <ShieldCheckIcon className="h-6 w-6 text-white mr-2" />
            <p className="text-lg font-mono text-white">
            <span className="bg-red-800 text-Slate-800 font-bold px-2 py-1 rounded-md animate-pulse">Garantía de 6 meses</span>

            </p>
          </div>
          <p className="text-stone-900">
            Nos especializamos en el control de plagas con técnicas seguras y efectivas. 
            ¡Llame hoy y obtenga una garantía de 6 meses en nuestro servicio!
          </p>
        </div>
        <div className="flex-shrink-0 text-center md:text-left">
          <p className="text-lg font-mono text-stone-950 mb-2 flex items-center justify-center md:justify-start">
            <PhoneIcon className="h-6 w-6 text-stone-950 mr-2" />
            Teléfono:
          </p>
          <a href="tel:+3014894440" className="text-2xl font-bold text-stone-950 hover:underline">
            +57 3014894440
          </a>
          <a href="tel:+3014894440" className="mt-4 inline-block bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromocionFumigacion;
