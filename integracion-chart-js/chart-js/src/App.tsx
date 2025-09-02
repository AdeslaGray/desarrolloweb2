import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const data = {
    labels: ['Ropa', 'Zapatos', 'Accesorios'],
    datasets: [
      {
        label: 'Cantidad de productos',
        data: [12, 8, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div style={{ width: '600px', margin: '40px auto' }}>
      <h2>Productos por Categoría</h2>
      <Bar data={data} />
    </div>
  );
}

export default App;
