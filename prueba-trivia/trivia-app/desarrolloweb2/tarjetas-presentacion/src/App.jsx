import React, { useEffect, useState } from 'react';
import Card from './Card';
import './index.css';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Inicializa la lista de personas
    const initialData = [
      { nombre: 'Ana López', ocupacion: 'Diseñadora UX', pais: 'México' },
      { nombre: 'Carlos Méndez', ocupacion: 'Desarrollador Backend', pais: 'Argentina' },
      { nombre: 'Lucía Torres', ocupacion: 'Ingeniera de Datos', pais: 'Chile' },
      { nombre: 'Pedro Ramírez', ocupacion: 'QA Tester', pais: 'Colombia' },
      { nombre: 'Sofía Gómez', ocupacion: 'Product Manager', pais: 'Perú' }
    ];
    setPeople(initialData);
  }, []);

  return (
    <div className="container">
      <h1>Lista de Personas</h1>
      <div className="card-list">
        {people.map((persona, index) => (
          <Card
            key={index}
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </div>
    </div>
  );
};

export default App;