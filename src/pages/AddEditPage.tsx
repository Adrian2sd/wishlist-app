import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useWishlist } from '../hooks/useWishlist';
import * as api from '../api/client';
import { ItemForm } from '../components/ItemForm';

export const AddEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, editItem } = useWishlist();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(!!id);

  useEffect(() => {
    if (id) {
      setFetchLoading(true);
      api.getItem(id)
        .then(data => setItem(data))
        .catch(err => {
          console.error(err);
          alert('No se pudo cargar el producto');
          navigate('/');
        })
        .finally(() => setFetchLoading(false));
    }
  }, [id, navigate]);

  const handleSubmit = async (data: Omit<Item, 'id'>) => {
    setLoading(true);
    try {
      if (id) {
        await editItem(id, data);
      } else {
        await addItem(data);
      }
      navigate('/');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) return <p className="text-center py-10">Cargando datos del producto...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{id ? 'Editar producto' : 'Añadir nuevo producto'}</h1>
      <ItemForm initialData={item} onSubmit={handleSubmit} isLoading={loading} />
    </div>
  );
};