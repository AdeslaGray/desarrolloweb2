import React, { useEffect, useState } from "react";
// ...existing code...

const ObtenerGastos: React.FC = () => {
  const [, setGastos] = useState([]);

  const obtenerGastos = async () => {
    const res = await fetch("http://localhost:5000/gasto");
    const data = await res.json();
    setGastos(data);
  };

  useEffect(() => {
    obtenerGastos();
  }, []);

  // ...existing code...
  return (
    <div>
      {/* Render gastos or other UI here */}
    </div>
  );
};

export default ObtenerGastos;