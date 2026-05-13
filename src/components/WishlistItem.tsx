import { PriorityBadge } from './PriorityBadge';

interface Props {
  item: Item;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const WishlistItem = ({ item, onEdit, onDelete }: Props) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-2">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <PriorityBadge priority={item.priority} />
    </div>
    {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
    <div className="flex justify-between items-center">
      <span className="font-bold text-green-700">{item.price} €</span>
      <span className="text-xs bg-gray-200 rounded px-2 py-1">{item.category}</span>
    </div>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
        Ver producto
      </a>
    )}
    <div className="flex gap-2 mt-2">
      <button onClick={() => onEdit(item.id)} className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 text-sm">
        Editar
      </button>
      <button onClick={() => onDelete(item.id)} className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 text-sm">
        Eliminar
      </button>
    </div>
  </div>
);