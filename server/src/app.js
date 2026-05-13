import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items.js';

const app = express();

app.use(cors());
app.use(express.json());

// Montamos el router bajo el prefijo de versión
app.use('/api/v1/items', itemsRouter);

// Manejador para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;