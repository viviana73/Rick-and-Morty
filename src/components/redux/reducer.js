import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action/actionType"

const inicialState = {
    myFavorites: [],
    allCharacter: []
}
const rootReducer = (state = inicialState, action) => {
     switch(action.type){
        case ADD_FAV:
         return {
            ...state,
            myFavorites:[...state.allCharacter, action.payload],
            allCharacter: [...state.allCharacter, action.payload]
         }
        case REMOVE_FAV:
            return{
             ...state,
             myFavorites:state.myFavorites.filter(char => char.id !== action.payload )   
            }
        case FILTER:
            const filtered= state.allCharacter.filter(char => char.gender === action.payload)
            return {
             ...state,
             myFavorites: filtered
            } 
        case ORDER:
            const orderChar = state.myFavorites.sort((a, b) => {
                if(action.payload === 'A'){
                 return a.id - b.id;
                }else{
                 return b.id - a.id;
                }
            })
            return {
            ...state, 
            myFavorites: [...orderChar]   
            }       
        default: {
            return {...state}
        }
     }
}
export default rootReducer