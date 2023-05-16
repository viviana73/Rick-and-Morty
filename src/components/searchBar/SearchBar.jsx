import style from './searchBar.module.css';

export default function SearchBar({onSearch}) {
   return (
      <div className= {style.bar}>
         <input type="search" className= {style.searchImput}/>
			<button className= {style.searchButton}
				onClick={onSearch}>Agregar</button>
      </div>
   );
}
