import React from 'react';
import alcaldiaMedellin from '../img/Secretaría de salud.webp';
import sanitaria from '../img/saneamiento-básico-2.webp';
import sena from '../img/SENA.webp';

const Certificacion = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h2 className="font-mono text-3xl font-bold text-center mb-6">Certificaciones</h2>
      
      <div className="flex items-start mb-4">
        <img src={alcaldiaMedellin} alt="Ministerio de Salud" className="h-20 w-20 mr-4" />
        <p className="text-lg text-gray-700">
          Estamos certificados por el Ministerio de Salud y la Secretaría de Salud de Antioquia y municipios de Colombia.
        </p>
      </div>
      
      <div className="flex items-start mb-4">
        <img src={sanitaria} alt="Concepto Sanitario Favorable" className="h-20 w-20 mr-4" />
        <p className="text-lg text-gray-700">
          La autoridad Sanitaria de Antioquia nos otorgó el Concepto Sanitario FAVORABLE.
        </p>
      </div>
      
      <div className="flex items-start mb-4">
        <img src={sena} alt="Certificado Técnico SENA" className="h-20 w-20 mr-4" />
        <p className="text-lg text-gray-700">
          Certificado técnico SENA para el Control Integral de plagas, y manejo de extintores portátiles.
        </p>
      </div>
    </div>
  );
};

export default Certificacion;
