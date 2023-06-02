import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail() {
    const {id} = useParams();
    const [charDetail, setCharDetail] = useState({}); 
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharDetail({});
     }, [id]);
  return (
    <div style={{color: 'white'}}>{
         charDetail ? (
                <div>
                    <h2>Name:{charDetail.name}</h2>
                    <h4>Status:{charDetail.status}</h4>
                    <h4>Species:{charDetail.species}</h4>
                    <h4>Gender:{charDetail.gender}</h4>
                    <h4>Origin:{charDetail.origin && origin.name}</h4>
                    <img src={charDetail.image} alt={charDetail.image}/>
                </div>

            ):''
         }
    </div>
  )
}

export default Detail