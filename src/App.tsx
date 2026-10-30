import {Header} from './components/Header';
import {VacancyList} from './components/VacancyList';
import { vacancies } from './data/vacancies';

// App solo ensambla las piezas. No tiene lógica ni estilos propios.
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Vacantes</h2>
        <VacancyList vacancies={vacancies} />
      </main>
    </div>
  );
};

export default App;