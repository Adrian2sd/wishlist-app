import { Outlet, Link } from 'react-router-dom';

export const Layout = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        🛍️ Wishlist
      </Link>
      <nav>
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          + Añadir deseo
        </Link>
      </nav>
    </header>
    <main className="max-w-4xl mx-auto p-6">
      <Outlet />  {/* Aquí se renderizan las páginas hijas */}
    </main>
  </div>
);