import type { Vacancy } from '../types/vacancy';
import { VacancyCard } from './VacancyCard';
import './VacancyList.css';

// Este componente recibe una LISTA de vacantes por props.
interface VacancyListProps {
  vacancies: Vacancy[];
}

export const VacancyList = ({ vacancies }: VacancyListProps) => {
  return (
    <div className="vacancy-list">
      {/* "map" recorre la lista y devuelve una tarjeta por cada vacante. */}
      {vacancies.map((vacancy) => (
        // "key" identifica a cada elemento de la lista. Debe ser único: se usa el id.
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};
