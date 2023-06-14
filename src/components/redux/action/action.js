import { ADD_FAV, REMOVE_FAV, FILTER,ORDER } from "./actionType";


export const addFav = (payload) => {
    return {
        type:ADD_FAV,
        payload
    }
}

export const removeFav = (id) => ({
    type: REMOVE_FAV,
    payload: id
})
export const filterCards = (gender) =>({
    type: FILTER,
    payload: gender
})
export const orderCards = (payload) =>({
    type: ORDER,
    payload
})