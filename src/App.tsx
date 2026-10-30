// "App" es el componente raíz. Un componente es una FUNCIÓN que devuelve JSX (HTML dentro de TypeScript).
// Aquí está escrito como función flecha, igual que el resto de nuestro código.
const App = () => {
  // "return" devuelve lo que se dibujará en pantalla. Los paréntesis permiten escribirlo en varias líneas.
  return (
    // <main> es una etiqueta HTML normal. En JSX, todo componente devuelve UN solo elemento que lo envuelve todo.
    <main>
      <h1>TalentHub</h1>
      <p>Plataforma de gestión de vacantes y postulaciones</p>
    </main>
  );
};

// "export default" permite que otros archivos (main.tsx) puedan importar este componente.
export default App;
