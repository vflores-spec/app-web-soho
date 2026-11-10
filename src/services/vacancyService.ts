import type { Vacancy } from '../types/vacancy';
import { apiClient } from './apiClient';

// Pide la lista de vacantes a la API. <Vacancy[]> le dice a TypeScript qué forma tienen los datos.
export const getVacancies = async (): Promise<Vacancy[]> => {
  const response = await apiClient.get<Vacancy[]>('/vacancies');

  // axios deja el cuerpo de la respuesta (ya convertido de JSON) en "data".
  return response.data;
};