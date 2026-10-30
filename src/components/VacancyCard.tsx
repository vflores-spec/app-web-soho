// Importa los estilos de este componente. Vite se encarga de incluirlos en la página.
import './VacancyCard.css';

// Describe QUÉ DATOS recibe el componente y de qué tipo es cada uno.
// Si alguien usa el componente sin uno de ellos, o con un tipo equivocado, el editor lo marca.
interface VacancyCardProps {
  title: string; // título del puesto
  company: string; // nombre de la empresa
  modality: string; // remoto, presencial o híbrido
  salary: number; // salario ofrecido
}

// El componente es una función flecha que RECIBE las props como un objeto.
// Los datos se sacan del objeto en la misma línea (destructuring): { title, company, modality, salary }.
export const VacancyCard = ({ title, company, modality, salary }: VacancyCardProps) => {
  return (
    // "className" reemplaza al "class" de HTML (en JavaScript, "class" es una palabra reservada).
    <article className="vacancy-card">
      {/* Las llaves {} permiten insertar un valor de JavaScript dentro del JSX. */}
      <h2>{title}</h2>
      <p>{company}</p>
      <p>Modalidad: {modality}</p>
      <p>Salario: ${salary}</p>
    </article>
  );
};
