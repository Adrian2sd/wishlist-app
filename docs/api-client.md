# Cliente de API Tipado

Archivo `src/api/client.ts`:
- Función base `apiFetch<T>` que maneja errores y tipado.
- Funciones exportadas: `getItems()`, `getItem(id)`, `createItem(data)`, `updateItem(id, data)`, `deleteItem(id)`.
- Todas devuelven `Promise<ApiResponse<Item | Item[]>>`.

Interfaz `ApiResponse<T>`:
{
  data: T | null;
  error: string | null;
  loading: boolean;
}

En los componentes, se gestionan los tres estados:
- loading: spinner
- error: mensaje de error
- data: renderizado de la lista o formulario.