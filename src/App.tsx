import {Header} from './components/Header';
import {VacanciesPage} from './pages/VacanciesPage';

// App solo ensambla: la cabecera y la pantalla de vacantes.
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <VacanciesPage />
      </main>
    </div>
  );
};

export default App;