import { Link, NavLink } from 'react-router';
import './Header.css';

// La cabecera de la página, con la navegación principal.
export const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        {/* Link cambia de página SIN recargar el navegador. */}
        <Link to="/" className="header-brand">
          TalentHub
        </Link>
        <nav aria-label="Principal">
          {/* NavLink sabe si su dirección es la actual: "isActive" permite resaltarlo. */}
          <NavLink
            to="/vacancies"
            className={({ isActive }) => (isActive ? 'header-link header-link-active' : 'header-link')}
          >
            Vacantes
          </NavLink>
        </nav>
      </div>
    </header>
  );
};