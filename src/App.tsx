// "App" es el componente raíz. Un componente es una FUNCIÓN que devuelve JSX (HTML dentro de TypeScript).

import { VacancyCard } from "./components/VacancyCard";

// Aquí está escrito como función flecha, igual que el resto de nuestro código.
const App = () => {
  // "return" devuelve lo que se dibujará en pantalla. Los paréntesis permiten escribirlo en varias líneas.
  return (
    // <main> es una etiqueta HTML normal. En JSX, todo componente devuelve UN solo elemento que lo envuelve todo.
    <main>
      <h1>TalentHub</h1>
      <p>Plataforma de gestión de vacantes y postulaciones</p>
      {/* El mismo componente, usado dos veces con datos distintos (datos de prueba en español). */}
      {/* Los textos van entre comillas; los números van entre llaves: salary={900}. */}
      <VacancyCard title="Desarrollador Backend Jr" company="Tech Andes" modality="remoto" salary={900} />
      <VacancyCard title="Analista de Datos" company="DataSur" modality="híbrido" salary={1100} />
    </main>
  );
};

// "export default" permite que otros archivos (main.tsx) puedan importar este componente.
export default App;
