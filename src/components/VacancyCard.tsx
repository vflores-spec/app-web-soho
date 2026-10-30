import type { Vacancy } from '../types/vacancy';
import './VacancyCard.css';

// Este componente recibe UNA vacante por props.
interface VacancyCardProps {
  vacancy: Vacancy;
}

// Muestra los datos de una vacante. Las llaves {} insertan valores de JavaScript dentro del JSX.
export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  return (
    <article className="vacancy-card">
      <p className="vacancy-card-company">{vacancy.company}</p>
      <h3 className="vacancy-card-title">{vacancy.title}</h3>
      <div className="vacancy-card-footer">
        <span className="vacancy-card-modality">{vacancy.modality}</span>
        <span className="vacancy-card-salary">${vacancy.salary} / mes</span>
      </div>
    </article>
  );
};