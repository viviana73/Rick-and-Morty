import React, { useState, useEffect } from 'react';
import style from './card.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/action/action';

 function Card({id,name, species, gender, image, onClose, status, origin, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if (charFav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

    function handleFavorite(){
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else {
         setIsFav(true)
         addFav({id,name, species, gender, image, origin, status})
      }
    }

   return (
      <div className={style.container}>
          <button onClick={() => onClose(id)} className= {style.buttonX}>X</button>
          {
            isFav ? (
          <button onClick={handleFavorite}>
             <span role="img" aria-label="Heart">❤️</span></button>
           ) : (
          <button onClick={handleFavorite}>
            <span role="img" aria-label="White heart">🤍</span></button>
           )
         }
          <img src={image} className= {style.image} alt='name'/>
          <h2>{id}</h2>
          <Link to={`/detail/${id}`}><h2>Name:{name}</h2></Link>
         <h2>especie:{species}</h2>
         <h2>genero:{gender}</h2>
         <h2>status:{status}</h2>
         <h2>origen:{origin} </h2>
         
      </div>
   );
}
export function mapDispatchToProps(dispatch){
   return{
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
export function mapStateToProops(state){
   return{
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProops, mapDispatchToProps)(Card);
