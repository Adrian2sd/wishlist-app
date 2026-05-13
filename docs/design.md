# Arquitectura de la Wishlist App

## Estructura de Componentes
- **App**: define rutas.
- **Layout**: cabecera, navegación y contenido principal.
- **HomePage**: muestra la lista de deseos, opciones de filtro.
- **AddEditPage**: formulario compartido para añadir/editar.
- **NotFoundPage**: página 404.
- **WishlistItem**: tarjeta de un producto (reutilizable).
- **ItemForm**: formulario controlado para datos del producto.
- **Modal**: ventana modal genérica (p.ej. para confirmar eliminación).
- **PriorityBadge**: etiqueta visual de prioridad.

## Gestión de Estado
- **Context API** (`WishlistContext`): centraliza el listado de items y funciones de actualización. El Provider consume el custom hook `useWishlist` que encapsula las llamadas a la API.
- **Estados locales**: manejo de formularios, modales, carga y errores.

## API REST
- **Recursos**: `/api/v1/items`
- **Endpoints**:
  - `GET /api/v1/items` → lista todos los items
  - `GET /api/v1/items/:id` → un item
  - `POST /api/v1/items` → crea un item (body: {name, description, price, ...})
  - `PUT /api/v1/items/:id` → actualiza un item
  - `DELETE /api/v1/items/:id` → elimina un item
- **Códigos HTTP**: 200/201 éxito, 400 validación, 404 no encontrado, 500 error servidor.

## Contrato de Datos
```typescript
interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  link: string;
  priority: 'alta' | 'media' | 'baja';
  category: string;
}