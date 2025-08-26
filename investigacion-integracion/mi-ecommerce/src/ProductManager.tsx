import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';

const API_URL = 'https://tu-api.com/productos';

const ProductManager: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const actualizarProducto = async (id: number, datosActualizados: Partial<Product>) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados),
      });
      if (!res.ok) throw new Error('Error al actualizar');
      const actualizado = await res.json();
      setProductos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...actualizado } : p))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarProducto = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar');
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{producto.nombre}</strong> - ${producto.precio}
              <br />
              <small>{producto.descripcion}</small>
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() =>
                  actualizarProducto(producto.id, { nombre: 'Actualizado' })
                }
              >
                Actualizar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarProducto(producto.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;