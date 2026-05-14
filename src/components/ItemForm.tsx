import { useState } from 'react';
import type { FormEvent } from 'react';

interface Props {
  initialData?: Item;
  onSubmit: (data: Omit<Item, 'id'>) => void | Promise<void>;
  isLoading?: boolean;
}

export const ItemForm = ({ initialData, onSubmit, isLoading }: Props) => {
  const [form, setForm] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price?.toString() || '',
    link: initialData?.link || '',
    priority: initialData?.priority || 'media',
    category: initialData?.category || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (form.price && isNaN(Number(form.price))) newErrors.price = 'Debe ser un número';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      ...form,
      price: form.price ? Number(form.price) : 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Nombre *</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" disabled={isLoading} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea name="description" value={form.description} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={3} disabled={isLoading} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Precio (€)</label>
        <input type="text" name="price" value={form.price} onChange={handleChange} className="w-full border rounded px-3 py-2" disabled={isLoading} inputMode="decimal" />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Enlace</label>
        <input type="url" name="link" value={form.link} onChange={handleChange} className="w-full border rounded px-3 py-2" disabled={isLoading} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Prioridad</label>
        <select name="priority" value={form.priority} onChange={handleChange} className="w-full border rounded px-3 py-2" disabled={isLoading}>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Categoría</label>
        <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full border rounded px-3 py-2" disabled={isLoading} placeholder="Ej: electrónica, ropa..." />
      </div>
      <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50">
        {isLoading ? 'Guardando...' : initialData ? 'Actualizar' : 'Añadir'}
      </button>
    </form>
  );
};