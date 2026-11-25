import { Link } from 'react-router';
import './NotFoundPage.css';

// Se muestra cuando la dirección no coincide con ninguna ruta.
export const NotFoundPage = () => {
  return (
    <section className="not-found">
      <h2 className="not-found-title">Página no encontrada</h2>
      <p className="not-found-text">La dirección que escribió no existe.</p>
      <Link to="/vacancies" className="not-found-link">
        Ir a las vacantes
      </Link>
    </section>
  );
};