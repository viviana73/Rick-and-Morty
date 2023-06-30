/*import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';

function App() {
   const {pathname}= useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   //const URL = 'http://localhost:3001/rickandmorty/login/';
   const URL = 'http://localhost:3001/rickandmorty/login/';
   
    async function login(userData) {
      const { email, password } = userData;
      try {
          const {data} = await axios(URL + `?email=${email}&password=${password}`)
          const { access } = data;
          setAccess(data);
          access && navigate('/home');
         
      } catch (error) {
         const {data} = error.response;
         alert(data.message);
      }
   }

   }
   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);

   async function onSearch(id) {
      if(!characters.find(char => char.id === data.id)){
         alert(`Ya existe ese personaje con el id ${id}`)
         return
      }
      try {
         const {data} = await axios( `http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data]);
         
      } catch (error) {
         alert(error.response.data);
   
   }
   const onRandom =(character) => {
      setCharacters((oldChars) => [...oldChars, character]);
   }
   const onClose = (id) => {
     setCharacters( characters.filter(char => char.id !== Number(id) ))
   }
  
   return (
      <div className='App'>
      {pathname !== '/' && <Nav onSearch ={onSearch} onRandom ={onRandom} />}
       <Routes>
         <Route path='/' element={<Form login={login} />} />
         <Route path='/about' element={<About/>} />
         <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>} />
       </Routes>
        
         
        
      </div>
   );
}

export default App;*/
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const URL = 'http://localhost:3001/rickandmorty/login/';

  async function login(userData) {
    const { email, password } = userData;
    try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  async function onSearch(id) {
    if (characters.find(char => char.id === id)) {
      alert(`Ya existe ese personaje con el id ${id}`);
      return;
    }
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      setCharacters(oldChars => [...oldChars, data]);
    } catch (error) {
      alert(error.response.data);
    }
  }

  const onRandom = character => {
    setCharacters(oldChars => [...oldChars, character]);
  };

  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== Number(id)));
  };

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} onRandom={onRandom} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

