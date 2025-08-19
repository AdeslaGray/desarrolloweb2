import React, { useState } from 'react';

const TextoColor = () => {
  const [texto, setTexto] = useState('');

  // Función para determinar el color según la longitud
  const obtenerColor = () => {
    const longitud = texto.length;
    if (longitud < 10) return 'yellow';
    if (longitud >= 10 && longitud < 50) return 'green';
    return 'red';
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <p style={{ color: obtenerColor(), marginTop: '15px', fontWeight: 'bold' }}>
        {texto}
      </p>
    </div>
  );
};

export default TextoColor;