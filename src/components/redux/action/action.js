import { ADD_FAV, REMOVE_FAV } from "./actionType";


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