'use client';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type MarcaData = {
  marca: string;
  cantidad: number;
};

export default function PieChart() {
  const [data, setData] = useState<MarcaData[]>([]);

  useEffect(() => {
    fetch('/api/cantidadPorMarca')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error al cargar datos:', err));
  }, []);

  const chartData = {
    labels: data.map(d => d.marca),
    datasets: [
      {
        data: data.map(d => d.cantidad),
        backgroundColor: [
          '#F87171', // rojo
          '#34D399', // verde
          '#60A5FA', // azul
          '#FBBF24', // amarillo
          '#A78BFA', // violeta
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
      <Pie data={chartData} options={options} />
    </div>
  );
}