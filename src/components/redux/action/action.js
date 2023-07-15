import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV  } from "./actionType";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
         
        } catch (error) {
         console.log(error)
      }
      
       };
    };

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const {data} =await axios.delete(endpoint)
            
                return dispatch({
                   type: REMOVE_FAV,
                   payload: data,
             });
            
        } catch (error) {
            console.log(error)
        }
       
    };
 };
export const getFav = () =>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async(dispatch) => {
        try {
           const {data} = await axios(endpoint);
           return dispatch({
             type: GET_FAV,
             payload: data
           }) 
        } catch (error) {
            
        }
    }
}

export const filterCards = (gender) =>({
    type: FILTER,
    payload: gender
})
export const orderCards = (payload) =>({
    type: ORDER,
    payload
})