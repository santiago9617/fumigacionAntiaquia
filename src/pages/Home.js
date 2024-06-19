import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projec from '../components/Projec';
import Clients from '../components/Clients';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Service from '../components/Service';
import WhatsAppButton from '../components/WhatsAppButton';
import imagen1 from '../img/IMG_9509-FILEminimizer.webp';
import imagen2 from '../img/Desinfeccion-de-Hogares-y-Locales-Comerciales-en-Medellín-e1602727479659.jpg';
import imagen3 from '../img/Fumigacion-de-Plagas-en-Medellin-y-Valle-de-Aburra-1024x978.jpeg';
import imagen4 from '../img/rodenticida01.jpg';
import PromocionFumigacion from '../components/PromocionFumigacion';
import Certificacion from '../components/Certificacion';

const Home = () => {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PromocionFumigacion /> 
        <WhatsAppButton />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-4 text-gray-800">
          <div className="md:col-span-1">
            <Service />
          </div>
          <div className="md:col-span-1">
            <Projec />
          </div>
          <div className="md:col-span-1">
            <Clients />
          </div>
        </div>
        <Certificacion />
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono">Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg shadow-lg">
                <img src={servicio.imagen} alt={servicio.nombre} className="w-32 h-32 mb-4 object-cover rounded-full" />
                <h3 className="text-xl font-bold mb-2">{servicio.nombre}</h3>
                <p className="text-sm text-center">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        <About />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
