import axios from 'axios';

// Un cliente de axios ya configurado. La dirección de la API se escribe UNA sola vez, aquí.
// import.meta.env.VITE_API_URL lee la variable del archivo .env.development.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Si la API no responde en 5 segundos, la petición falla en lugar de esperar para siempre.
  timeout: 5000,
});