// Importation 

import { ADD_PRODUCT, LOAD_PRODUCT, GET_PRODUCT, FAIL_PROD, GET_MY_PRODUCT } from "../actionType/prod.actionType"



// InitialState 
const InitialState={
    isLoadProd:false,
    products:[],
    MyProd: [],
    prod:{},
    error:null
}


// Pure function 
const prodReducer = (state=InitialState, {type, payload})=>{
switch (type) {
    case LOAD_PRODUCT: return{...state, isLoadProd:true}
    case GET_PRODUCT:return {
        ...state, isLoadProd:false,products:payload
    }
    case FAIL_PROD:
        return {...state,isLoadProd:false,error:payload}

    case ADD_PRODUCT:
            return{
                ...state, 
                isLoadProd:false,
                products:[...state.products, payload] //Rajouter le nouveau produit 
                // Dans le tableau 
            }
    case GET_MY_PRODUCT:
        return {
            ...state, 
            isLoadProd:false,
            MyProd:payload
        }
    default:
        return state 
}
}

// Exportation 

export default prodReducer