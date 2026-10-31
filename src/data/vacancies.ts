// "import type" porque Vacancy solo existe para TypeScript.
import type { Vacancy } from '../types/vacancy';

// Datos de ejemplo (datos de prueba en español). En la Semana 6 vendrán de la API.
export const vacancies: Vacancy[] = [
  { id: 1, title: 'Desarrollador Backend Jr', company: 'Tech Andes', modality: 'remoto', salary: 900 },
  { id: 2, title: 'Analista de Datos', company: 'DataSur', modality: 'híbrido', salary: 1100 },
  { id: 3, title: 'QA Tester', company: 'Tech Andes', modality: 'presencial', salary: 800 },
  { id: 4, title: 'Diseñadora de Producto', company: 'Estudio Alba', modality: 'remoto', salary: 1200 },
];