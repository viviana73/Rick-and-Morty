import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV } from "./action/actionType"

const inicialState = {
    myFavorites: [],
    allCharacter: []
}
const rootReducer = (state = inicialState, action) => {
     switch(action.type){
        case ADD_FAV:
         return {
            ...state, 
            myFavorites: action.payload,
            allCharacter: action.payload
         }
        case REMOVE_FAV:
            return{
             ...state,
             myFavorites: action.payload    
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
         case GET_FAV:
            return {
                ...state, 
               myFavorites: action.payload,
               allCharacter: action.payload 
            }         
        default: {
            return {...state}
        }
     }
}
export default rootReducer