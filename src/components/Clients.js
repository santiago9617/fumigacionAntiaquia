import React from 'react';

function Clients() {
  const chulo = (
    <svg className="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"/>
      <path d="M7 12l5 5l10 -10"/>
      <path d="M2 12l5 5m5 -5l5 -5"/>
    </svg>
  );
  
  return (
    <section id="clients" className="p-8 bg-orange-100">
      <h2 className="font-mono text-3xl font-bold text-center">Lo Que Nos Diferencia</h2>
      <div className="text-center mt-4 max-w-2xl mx-auto">
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Productos bajos o NULOS en <br/>toxicidad.</span>
        </div>
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Proceso amigable con tus <br/>mascotas.</span>
        </div>
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Personal calificado.</span>
        </div>
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Tecnología de punta.</span>
        </div>
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Servicio Certificado (Empresas).</span>
        </div>
        <div className="flex items-center mb-2">
          {chulo}
          <span className="ml-2">Proveedores Certificados y <br/>Auditados</span>
        </div>
      </div>
      
    </section>
  );
}

export default Clients;
