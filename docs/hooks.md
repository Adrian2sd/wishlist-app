# Hooks utilizados

## useState
Para el estado de los formularios (name, description, etc.) y para controlar la carga/errores en cada componente.

## useEffect
Al montar la página Home, se dispara la llamada a `fetchItems()` y se actualiza el estado global.

## useMemo
Se usa para filtrar/ordenar la lista de items sin recalcular en cada render, por ejemplo:

const filteredItems = useMemo(() => items.filter(i => i.category === selectedCategory), [items, selectedCategory]);

## useCallback
Evita recrear funciones que se pasan como props a componentes hijos, como `handleDelete = useCallback((id) => { ... }, [deps])`.

## Custom Hook: useWishlist
Envuelve el contexto y proporciona una interfaz limpia:

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist debe usarse dentro de un WishlistProvider');
  return context;
};