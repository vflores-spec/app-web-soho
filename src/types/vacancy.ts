// Describe cómo es una vacante, tal como la devuelve la API. "export" permite usarla desde otros archivos.
export interface Vacancy {
  id: number;
  title: string;
  companyId: string;
  companyName: string;
  modality: string;
  salary: number;
}