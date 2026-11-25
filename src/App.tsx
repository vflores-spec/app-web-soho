import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { VacanciesPage } from './pages/VacanciesPage';
import { VacancyDetailPage } from './pages/VacancyDetailPage';

// App ensambla la cabecera y la tabla de rutas: qué página se muestra para cada dirección.
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          {/* La raíz "/" redirige a la lista. "replace" evita que "atrás" vuelva a la raíz. */}
          <Route path="/" element={<Navigate to="/vacancies" replace />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          {/* ":id" es un parámetro: acepta cualquier valor (/vacancies/1, /vacancies/2...). */}
          <Route path="/vacancies/:id" element={<VacancyDetailPage />} />
          {/* "*" captura cualquier dirección que no coincidió con las anteriores. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;