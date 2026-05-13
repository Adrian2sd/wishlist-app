import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AddEditPage } from './pages/AddEditPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddEditPage />} />
            <Route path="/edit/:id" element={<AddEditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </WishlistProvider>
  );
}

export default App;