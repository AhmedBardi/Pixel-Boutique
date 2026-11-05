// Importation 

import { FAIL_PROD, GET_MY_PRODUCT, GET_ONE_PRODUCT, GET_PRODUCT, LOAD_PRODUCT } from "../actiontype/prod.actiontype"

import { ADD_PRODUCT } from "../actiontype/prod.actiontype"



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
        ...state, isLoad:false,products:payload
    }
    case FAIL_PROD:
        return {...state,isLoad:false,errors:payload}

    case ADD_PRODUCT:
            return{
                ...state, 
                isload:false,
                products:[...state.products, payload] //Rajouter le nouveau produit 
                // Dans le tableau 
            }
    case GET_MY_PRODUCT:
        return {
            ...state, 
            isload:false,
            MyProd:payload
        }
    default:
        return state 
}
}

// Exportation 

export default prodReducer