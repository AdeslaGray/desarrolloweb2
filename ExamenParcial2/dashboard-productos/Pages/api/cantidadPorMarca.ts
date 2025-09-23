import { getProductos } from '@/lib/db';

export default async function handler({ res }: { res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { marca: string; cantidad: number; }[]): void; new(): unknown; }; }; }; }): Promise<void> {
  const productos = await getProductos();
  const marcas = [...new Set(productos.map(p => p.marca))];

  const resultado = marcas.map(marca => {
    const cantidad = productos.filter(p => p.marca === marca).length;
    return { marca, cantidad };
  });

  res.status(200).json(resultado);
}