# Despliegue en Vercel

1. En la raíz, crea `vercel.json` para que sirva el frontend y redirija las peticiones /api al backend.
2. Configura la URL de la API en el frontend con variable de entorno `VITE_API_URL` (en Vercel, se usa `/api/v1` porque backend y frontend comparten dominio).
3. Despliega con `vercel` o desde GitHub. El backend se despliega como serverless function (necesita una adaptación) o se puede usar un único servidor Express. La forma más sencilla es configurar un endpoint `api/server.js` que exporte la app.
4. Verifica que la app funciona en producción.