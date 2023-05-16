import './App.css';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
       <div className='nav'>
       <SearchBar onSearch={(characterID) => window.alert(characterID)} />
       </div>

         <Cards characters={characters} />
        
      </div>
   );
}

export default App;
