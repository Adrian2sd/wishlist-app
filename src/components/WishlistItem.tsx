import type { Item } from '../api/wishlistApi';

type Props = {
  item: Item;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const WishlistItem = ({ item, onEdit, onDelete }: Props) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{item.name}</h2>

      {item.description && (
        <p className="text-gray-600">{item.description}</p>
      )}

      {item.price !== undefined && (
        <p className="mt-2 font-semibold">{item.price} €</p>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(String(item.id))}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(String(item.id))}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};