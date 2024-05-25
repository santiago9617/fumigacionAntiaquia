import React from 'react';

function ContactForm() {
    
  return (
    <section id="contact" className="p-8 bg-sky-900 text-white">
      <h2 className="font-mono text-3xl font-bold text-center">CONTACTO</h2>
      <form className="font-mono mt-8 max-w-md mx-auto">

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block border-b border-gray-500">Nombre</label>
            <input type="text" className="w-full px-3 py-2 bg-sky-900"/>
          </div>
          <div className="w-1/2 ml-2">
            <label className="block border-b border-gray-500">Apellido</label>
            <input type="text" className="w-full px-3 py-2 bg-sky-900"/>
          </div>
        </div>


        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block border-b border-gray-500">Email</label>
            <input type="text" className="w-full px-3 py-2 bg-sky-900"/>
          </div>
          <div className="w-1/2 ml-2">
            <label className="block border-b border-gray-500">Asunto</label>
            <input type="text" className="w-full px-3 py-2 bg-sky-900"/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block border-b border-gray-500">Mensaje</label>
          <textarea className="w-full px-3 py-2 bg-sky-900"></textarea>
        </div>
        <button type="submit" className="w-full bg-white text-gray-800 px-6 py-3 rounded">Enviar</button>
      </form>  
    </section>
  );
}

export default ContactForm;
