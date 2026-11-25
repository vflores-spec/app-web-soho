import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { getVacancyById } from '../services/vacancyService';
import type { Vacancy } from '../types/vacancy';
import './VacancyDetailPage.css';

export const VacancyDetailPage = () => {
  // useParams lee los parámetros de la dirección. Para /vacancies/3, "id" vale "3" (siempre es texto).
  const { id = '' } = useParams();

  const [vacancy, setVacancy] = useState<Vacancy | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Se ejecuta al abrir la página y cada vez que cambie el id de la dirección.
  useEffect(() => {
    const loadVacancy = async () => {
      try {
        setVacancy(await getVacancyById(id));
      } catch (error) {
        // axios lanza error con 404 (no existe) o 400 (id inválido): se distingue de un fallo de conexión.
        const status = isAxiosError(error) ? error.response?.status : undefined;
        setErrorMessage(
          status === 404 || status === 400
            ? 'La vacante que busca no existe.'
            : 'No se pudo cargar la vacante. Intente de nuevo más tarde.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadVacancy();
  }, [id]);

  // Decide qué mostrar: carga, error o la vacante.
  const renderContent = () => {
    if (isLoading) {
      return <p className="vacancy-detail-status">Cargando vacante...</p>;
    }
    if (errorMessage || !vacancy) {
      return (
        <p className="vacancy-detail-status vacancy-detail-error" role="alert">
          {errorMessage}
        </p>
      );
    }
    return (
      <article className="vacancy-detail">
        <p className="vacancy-detail-company">{vacancy.companyName}</p>
        <h2 className="vacancy-detail-title">{vacancy.title}</h2>
        <dl className="vacancy-detail-list">
          <dt>Modalidad</dt>
          <dd className="vacancy-detail-modality">{vacancy.modality}</dd>
          <dt>Salario</dt>
          <dd>${vacancy.salary} / mes</dd>
        </dl>
      </article>
    );
  };

  return (
    <section>
      <Link to="/vacancies" className="vacancy-detail-back">
        ← Volver a las vacantes
      </Link>
      {renderContent()}
    </section>
  );
};