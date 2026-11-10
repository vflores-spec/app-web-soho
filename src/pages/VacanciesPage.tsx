import { useEffect, useState } from 'react';
import {SearchBar} from '../components/SearchBar';
import {VacancyList} from '../components/VacancyList';
import './VacanciesPage.css';
import type { Vacancy } from '../types/vacancy';
import { getVacancies } from '../services/vacancyService';

export const VacanciesPage = () => {
  // El estado: lo que el usuario escribió. Empieza vacío.
  const [searchTerm, setSearchTerm] = useState('');

  // Tres estados nuevos para trabajar con la API: los datos, si está cargando y si hubo un error.
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect ejecuta código DESPUÉS de dibujar la pantalla. Con [] al final, se ejecuta una sola vez, al abrir la página.
  useEffect(() => {
    const loadVacancies = async () => {
      try {
        // Pide las vacantes a la API y las guarda en el estado: React vuelve a dibujar con los datos.
        setVacancies(await getVacancies());
      } catch {
        // Si la petición falla (API apagada, error de red, CORS...), se muestra un mensaje para el usuario.
        setErrorMessage('No se pudieron cargar las vacantes. Intente de nuevo más tarde.');
      } finally {
        // "finally" se ejecuta siempre, haya salido bien o mal: la carga terminó.
        setIsLoading(false);
      }
    };

    loadVacancies();
  }, []);

  // Se limpia el texto: sin espacios sobrantes y en minúsculas, para que no importe cómo se escriba.
  const normalizedTerm = searchTerm.trim().toLowerCase();

  // DATO DERIVADO: la lista filtrada se calcula en cada dibujo; no se guarda en un estado aparte.
  // "filter" se queda con las vacantes cuyo título o empresa contienen el texto buscado.
  const filteredVacancies = vacancies.filter((vacancy) =>
    `${vacancy.title} ${vacancy.companyName}`.toLowerCase().includes(normalizedTerm),
  );

  // Decide qué mostrar debajo del buscador. Cada "if" devuelve y termina: carga, error, sin resultados o lista.
  const renderContent = () => {
    if (isLoading) {
      return <p className="vacancies-page-status">Cargando vacantes...</p>;
    }
    if (errorMessage) {
      // role="alert" hace que los lectores de pantalla anuncien el error.
      return (
        <p className="vacancies-page-status vacancies-page-error" role="alert">
          {errorMessage}
        </p>
      );
    }
    if (filteredVacancies.length === 0) {
      return <p className="vacancies-page-empty">No se encontraron vacantes con ese término.</p>;
    }
    return <VacancyList vacancies={filteredVacancies} />;
  };

  return (
    <section>
      <div className="vacancies-page-header">
        <h2 className="vacancies-page-title">Vacantes</h2>
        {!isLoading && !errorMessage && (
          <p className="vacancies-page-count">
            {filteredVacancies.length} {filteredVacancies.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </div>

      {/* Se le entrega el texto actual y la función que lo cambia: setSearchTerm. */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {renderContent()}
    </section>
  );
};
