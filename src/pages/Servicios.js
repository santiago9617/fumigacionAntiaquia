import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imagen1 from '../img/IMG_9509-FILEminimizer.webp';
import imagen2 from '../img/Desinfeccion-de-Hogares-y-Locales-Comerciales-en-Medellín-e1602727479659.jpg';
import imagen3 from '../img/Fumigacion-de-Plagas-en-Medellin-y-Valle-de-Aburra-1024x978.jpeg';
import imagen4 from '../img/rodenticida01.jpg';
import imagen5 from '../img/industria.jpg';
import imagen6 from '../img/hospital.jpg';
import imagen7 from '../img/medellin.jpg';
import imagen8 from '../img/restaurante.jpg';
import { WhatsAppButton, PhoneCallButton } from '../components/WhatsAppButton'; // Asegúrate de que la ruta sea correcta


const Servicios = () => {
  const openWhatsAppChat = () => {
    const mensaje = encodeURIComponent("Hola FumiPlagas J.R. Necesito información sobre sus servicios de control de plagas.");
    window.open(`https://wa.me/573014894440?text=${mensaje}`, '_blank');
  };

  const servicios = [
    {
      nombre: 'Control de Roedores',
      imagen: imagen4,
      descripcion: 'Productos amigables y seguros con tus mascotas',
    },
    {
      nombre: 'Control de Cucarachas',
      imagen: imagen1, 
      descripcion: 'Aplicación focalizada. No requiere lavados ni limpieza.',
    },
    {
      nombre: 'Control de Insectos Voladores',
      imagen: imagen3,
      descripcion: 'Aplicación eficaz, sin olor ni color.',
    },
    {
      nombre: 'Control de Ácaros y chinches',
      imagen: imagen2,
      descripcion: 'Desinfección con productos seguros y alta temperatura.',
    },
  ];

  const clases = [
    {
      nombre: 'RESIDENCIAS',
      imagen: imagen7,
    },
    {
      nombre: 'Ámbito Sanitario',
      imagen: imagen6, 
    },
    {
      nombre: 'SECTOR DE ALIMENTOS',
      imagen: imagen8,
    },
    {
      nombre: 'Ámbito industrial',
      imagen: imagen5,
    },
  ];

  return (
    <>
      <Header />
      <div className="fixed bottom-4 right-4 z-10">
        <WhatsAppButton />
      </div>
      <div className="fixed bottom-20 right-4 z-10">
        <PhoneCallButton />
      </div>
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center justify-center rounded-lg shadow-lg ${
                index % 2 === 0 ? 'bg-orange-100' : 'bg-slate-50'
              }`}
            >
              <img src={servicio.imagen} alt={servicio.nombre} className="w-32 h-32 mb-4 object-cover rounded-full" />
              <h3 className="text-xl font-bold mb-2">{servicio.nombre}</h3>
              <p className="text-sm text-center">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono">Clases de Servicio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {clases.map((clase, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center justify-center rounded-lg shadow-lg ${
                index % 2 === 0 ? 'bg-orange-100' : 'bg-slate-50'
              }`}
            >
              <img src={clase.imagen} alt={clase.nombre} className="w-32 h-32 mb-4 object-cover rounded-full" />
              <h3 className="text-xl font-bold mb-2">{clase.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 p-8 w-full">
        <p className="text-center text-lg font-semibold">Agenda Hoy Mismo Tu Cita, Fumigación en Medellín, Valle de Aburra y Alrededores.</p>
        <button onClick={openWhatsAppChat} className="block mx-auto mt-4 bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Agenda: 3014894440
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Servicios;
