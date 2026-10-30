// Describe cómo es una vacante. "export" permite usarla desde otros archivos.
export interface Vacancy {
  id: number;
  title: string;
  company: string;
  modality: string;
  salary: number;
}