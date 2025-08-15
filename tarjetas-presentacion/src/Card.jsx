import React from 'react';

const Card = ({ nombre, ocupacion, pais }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p><strong>Ocupación:</strong> {ocupacion}</p>
      <p><strong>País:</strong> {pais}</p>
    </div>
  );
};

export default Card;