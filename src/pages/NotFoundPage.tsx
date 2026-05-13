import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold text-gray-300">404</h1>
    <p className="text-xl mt-4">Página no encontrada</p>
    <Link to="/" className="text-blue-500 underline mt-6 inline-block">
      Volver al inicio
    </Link>
  </div>
);