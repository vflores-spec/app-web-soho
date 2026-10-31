import './SearchBar.css';

// Las props: el texto actual y la función que se llama cuando el usuario escribe.
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// Este componente NO guarda el texto: lo recibe y avisa los cambios. Así es reutilizable.
export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      // type="search" da un campo de búsqueda con botón para borrar.
      type="search"
      className="search-bar"
      placeholder="Buscar por título o empresa"
      // aria-label describe el campo a los lectores de pantalla (accesibilidad).
      aria-label="Buscar vacantes"
      // CAMPO CONTROLADO: lo que se ve es siempre el valor del estado.
      value={value}
      // Cada vez que el usuario escribe, se avisa al padre con el texto nuevo.
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
