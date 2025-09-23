// pages/api/promedioPorCategoria.ts
import { getProductos } from '@/lib/db';

export default async function handler({ res }: { res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { categoria: string; promedio: number; }[]): void; new(): unknown; }; }; }; }): Promise<void> {
  const productos = await getProductos();
  const categorias = [...new Set(productos.map(p => p.categoria))];

  const resultado = categorias.map(cat => {
    const filtrados = productos.filter(p => p.categoria === cat);
    const promedio = filtrados.reduce((acc, p) => acc + p.precio, 0) / filtrados.length;
    return { categoria: cat, promedio };
  });

  res.status(200).json(resultado);
}