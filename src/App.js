import React from 'react';
import './App.css';
import About from './components/about/About';
import { useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/form/Form';
import { useEffect } from 'react';
import Favorites from './components/favorites/Favorites';

function App() {
   const {pathname}= useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "viviana@henry.com";
   const PASSWORD = 'pass1234';

   function login ({email, password}){
      if(email === EMAIL && password === PASSWORD){
          setAccess(true)
          navigate('/home')
      }
       else alert('Usuario o contraseña incorrecta')
   }
   useEffect(() => {
      !access && navigate('/')
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
         if(!characters.find(char => char.id === data.id)){
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         }
         }else{
            alert(`Ya existe ese personaje con el id ${id}`)
         
         }    
      }).catch(() => window.alert('No hay personajes con ese ID'))
   
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

export default App;
