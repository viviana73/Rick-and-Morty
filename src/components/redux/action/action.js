import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER,ORDER } from "./actionType";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
         
        } catch (error) {
         
      }
      
       };
    };


/*export const removeFav = (id) => ({
    type: REMOVE_FAV,
    payload: id
})*/
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

export const filterCards = (gender) =>({
    type: FILTER,
    payload: gender
})
export const orderCards = (payload) =>({
    type: ORDER,
    payload
})