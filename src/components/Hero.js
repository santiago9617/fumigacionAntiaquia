import React from 'react';
import Image from '../img/IMG_9509-FILEminimizer.webp';
import logoWhatsapp from '../img/logo1-de-whatsapp.png';
import { openWhatsAppChat } from './WhatsAppButton';

function Hero() {


    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
            <button onClick={openWhatsAppChat} className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 z-20">
                <img src={logoWhatsapp} alt="Logo de WhatsApp" className="mr-2 h-6 w-auto" />
                Agendar por WhatsApp
            </button>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <div className="absolute inset-0 bg-black bg-opacity-5"></div> 
                <div className="bg-orange-100 p-8 rounded-lg shadow-lg max-w-2x1 mx-auto mt-96 relative z-10"> 
                    <h1 className="text-xl md:text-2xl text-gray-800 font-semibold">Soluciones innovadoras para el control de plagas</h1>
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mt-4">PROTEGIENDO TU HOGAR Y NEGOCIO</h2>
                    <button onClick={openWhatsAppChat} className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition duration-300 border border-blue-600">Contáctanos para una inspección</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
