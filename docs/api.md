# API de Wishlist

Base URL: `http://localhost:3001/api/v1` (desarrollo) o `/api/v1` en producción.

## Endpoints
### GET /items
Respuesta 200:
[
  {
    "id": "1",
    "name": "Auriculares",
    "description": "Bluetooth",
    "price": 79.99,
    "link": "https://...",
    "priority": "alta",
    "category": "electrónica"
  }
]
### POST /items
Body: { name, description?, price?, link?, priority?, category? } → 201 + item creado.

### PUT /items/:id
Body: campos a actualizar → 200 + item actualizado / 404.

### DELETE /items/:id
→ 200 / 404.

Errores: 400 con mensaje, 404.