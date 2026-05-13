# Configuración de rutas con React Router

- `/` → HomePage (lista de deseos)
- `/add` → AddEditPage (crear nuevo item)
- `/edit/:id` → AddEditPage (editar item existente)
- `*` → NotFoundPage (404)

Se usa el componente `<Routes>` y `<Link>` para la navegación. En el layout se incluye un menú de navegación.