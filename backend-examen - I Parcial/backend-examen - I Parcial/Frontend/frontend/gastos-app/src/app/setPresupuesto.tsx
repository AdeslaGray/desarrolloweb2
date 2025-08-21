import React, { useState } from "react";

const SetPresupuesto: React.FC = () => {
  const [presupuesto] = useState(0);
  const [gastado] = useState(0);

  const porcentaje = (gastado / presupuesto) * 100;

  let alerta = "";
  if (porcentaje >= 100) {
    alerta = "Has superado el límite del presupuesto, debes ajustar gastos";
  } else if (porcentaje >= 80) {
    alerta = "Ha alcanzado el 80% del presupuesto";
  }

  return (
    <div>
      <p>{alerta}</p>
      {/* Add UI for presupuesto and gastado */}
    </div>
  );
};

export default SetPresupuesto;