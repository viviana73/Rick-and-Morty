import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './searchBar.module.css';

export default function SearchBar({onSearch, onRandom}) {
   const [id, setId] = useState('');
   const [characters, setCharacters] = useState([]);
   
   useEffect(() => {
      // Obtener la lista de personajes al cargar el componente
      axios('https://rickandmortyapi.com/api/character')
        .then(({ data }) => {
          setCharacters(data.results);
        })
        .catch(() => {
          window.alert('Error al obtener la lista de personajes');
        });
    }, []);

   const handleChange =(event) => {
      setId(event.target.value)
   }
   const handleRandom = () => {
      if (characters.length === 0) {
         window.alert('No hay personajes disponibles');
         return;
       }
       const randomIndex = Math.floor(Math.random() * characters.length);
       const randomCharacter = characters[randomIndex];
      onRandom(randomCharacter); 
    };
   return (
      <div className= {style.bar}>
         <input type="search" className= {style.searchImput} onChange={handleChange}/>
			<button className= {style.searchButton}
				onClick={() => onSearch(id) }>Agregar</button>
         <button className= {style.randomButton} onClick={handleRandom}>Aleatorio</button>   
      </div>
   );
}
