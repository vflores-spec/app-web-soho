import { useState } from 'react';
import type { Vacancy } from '../types/vacancy';
import './VacancyCard.css';

// Este componente recibe UNA vacante por props.
interface VacancyCardProps {
  vacancy: Vacancy;
}


// Muestra los datos de una vacante. Las llaves {} insertan valores de JavaScript dentro del JSX.
export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
    // useState(false) crea un dato con valor inicial false ("no guardada").
  // Devuelve DOS cosas: el valor actual (isSaved) y la función para cambiarlo (setIsSaved).
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // El manejador: se ejecuta cuando el usuario hace clic. Invierte el valor: false pasa a true, y viceversa.
  const handleToggleSaved = () => {
    setIsSaved(!isSaved);
  };

  return (
    <article className="vacancy-card">
      <p className="vacancy-card-company">{vacancy.company}</p>
      <h3 className="vacancy-card-title">{vacancy.title}</h3>
      <div className="vacancy-card-footer">
        <span className="vacancy-card-modality">{vacancy.modality}</span>
        <span className="vacancy-card-salary">${vacancy.salary} / mes</span>
      </div>
      {/* type="button": es un botón común, no envía ningún formulario. */}
      {/* className cambia según el estado: si está guardada, lleva también la clase "activa". */}
      {/* aria-pressed avisa a los lectores de pantalla si el botón está activado (accesibilidad). */}
      {/* onClick conecta el clic con el manejador. OJO: se pasa la función SIN paréntesis. */}
      <button
        type="button"
        className={isSaved ? 'save-button save-button-active' : 'save-button'}
        aria-pressed={isSaved}
        onClick={handleToggleSaved}
      >
        {/* El texto también depende del estado. */}
        {isSaved ? 'Guardada' : 'Guardar'}
      </button>
    </article>
  );
};