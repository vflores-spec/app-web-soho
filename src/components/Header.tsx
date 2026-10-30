import './Header.css';

// La cabecera de la página. No recibe datos: siempre se ve igual.
export const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <span className="header-brand">TalentHub</span>
        <span className="header-tagline">Vacantes y postulaciones</span>
      </div>
    </header>
  );
};

