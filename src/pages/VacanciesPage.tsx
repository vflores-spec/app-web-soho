import { useState } from 'react';
import {SearchBar} from '../components/SearchBar';
import {VacancyList} from '../components/VacancyList';
import { vacancies } from '../data/vacancies';
import './VacanciesPage.css';

export const VacanciesPage = () => {
  // El estado: lo que el usuario escribió. Empieza vacío.
  const [searchTerm, setSearchTerm] = useState('');

  // Se limpia el texto: sin espacios sobrantes y en minúsculas, para que no importe cómo se escriba.
  const normalizedTerm = searchTerm.trim().toLowerCase();

  // DATO DERIVADO: la lista filtrada se calcula en cada dibujo; no se guarda en un estado aparte.
  // "filter" se queda con las vacantes cuyo título o empresa contienen el texto buscado.
  const filteredVacancies = vacancies.filter((vacancy) =>
    `${vacancy.title} ${vacancy.company}`.toLowerCase().includes(normalizedTerm),
  );

  return (
    <section>
      <div className="vacancies-page-header">
        <h2 className="vacancies-page-title">Vacantes</h2>
        <p className="vacancies-page-count">{filteredVacancies.length} resultados</p>
      </div>

      {/* Se le entrega el texto actual y la función que lo cambia: setSearchTerm. */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Renderizado condicional: si hay resultados se muestra la lista; si no, un mensaje. */}
      {filteredVacancies.length > 0 ? (
        <VacancyList vacancies={filteredVacancies} />
      ) : (
        <p className="vacancies-page-empty">No se encontraron vacantes con ese término.</p>
      )}
    </section>
  );
};
