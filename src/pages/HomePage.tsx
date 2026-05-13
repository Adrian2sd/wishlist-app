import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../hooks/useWishlist';
import { WishlistItem } from '../components/WishlistItem';
import { Modal } from '../components/Modal';

export const HomePage = () => {
  const { items, loading, error, removeItem } = useWishlist();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleConfirmDelete = async () => {
    if (deleteId) {
      await removeItem(deleteId);
      setDeleteId(null);
    }
  };

  if (loading) return <p className="text-center py-10">Cargando lista...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Mi Lista de Deseos</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">No hay productos aún. <a href="/add" className="text-blue-500 underline">Añade el primero</a>.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <WishlistItem
              key={item.id}
              item={item}
              onEdit={(id) => navigate(`/edit/${id}`)}
              onDelete={(id) => setDeleteId(id)}
            />
          ))}
        </div>
      )}

      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)} title="Confirmar eliminación">
        <p className="mb-4">¿Seguro que quieres eliminar este producto?</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => setDeleteId(null)} className="px-4 py-2 border rounded">Cancelar</button>
          <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Eliminar
          </button>
        </div>
      </Modal>
    </>
  );
};