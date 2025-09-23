import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

export default function Page() {
  return (
    <main className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-600">Dashboard de Productos</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Promedio por Categoría</h2>
        <LineChart />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Cantidad por Marca</h2>
        <PieChart />
      </section>
    </main>
  );
}