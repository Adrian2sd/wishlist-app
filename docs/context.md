# Context API - WishlistContext

Se crea un contexto que almacena:
- `items: Item[]`
- `loading: boolean`
- `error: string | null`
- Funciones: `fetchItems`, `addItem`, `updateItem`, `deleteItem`

El Provider contiene la lógica de fetch. Los componentes consumen el contexto mediante el custom hook `useWishlist`.

**Casos de uso**: compartir la lista de deseos entre páginas sin prop drilling, gestionar el estado de red de forma centralizada.

Ejemplo de consumo:
const { items, loading, deleteItem } = useWishlist();