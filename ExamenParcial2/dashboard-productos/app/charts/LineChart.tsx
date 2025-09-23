'use client';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

type CategoriaData = {
  categoria: string;
  promedio: number;
};

export default function LineChart() {
  const [data, setData] = useState<CategoriaData[]>([]);

  useEffect(() => {
    fetch('/api/promedioPorCategoria')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error al cargar datos:', err));
  }, []);

  const chartData = {
    labels: data.map(d => d.categoria),
    datasets: [
      {
        label: 'Promedio por Categoría',
        data: data.map(d => d.promedio),
        borderColor: '#4FA6E5',
        backgroundColor: '#A5B4FC',
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: '#4FA6E5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#374151',
        },
      },
      x: {
        ticks: {
          color: '#374151',
        },
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md">
      <Line data={chartData} options={options} />
    </div>
  );
}