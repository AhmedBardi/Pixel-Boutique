// Import 

import { logout } from "../actions/auth.action"
import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, SUCCESS_AUTH, LOGOUT_AUTH} from "./actionType/auth.actionType"





// InitialState

const initialState={
    isload:false,
    user:null,
    errors:[],
    success:[],
    isAuth:false
}


// Pure function 

const authReducer= (state=initialState, {type,payload})=>{
    switch (type) {
        // Dans le cas de l'attente de login
        case LOAD_AUTH: return{
            ...state,
            isload:true,
            
        }

        case SUCCESS_AUTH:
            localStorage.setItem("token",payload.token)
            return{
                ...state,
                isload:false,
                user:payload.user,
                success:payload.msg,
                isAuth:true
            }
            
        case CURRENT_AUTH:
            return{
                ...state,
                isload:false,
                user:payload,
                isAuth:true
            }
        case FAIL_AUTH:return{
            ...state,
                isload:false,
                errors:payload
        }

        case LOGOUT_AUTH :
            localStorage.removeItem("token")
            return{
                isload:false,
                user:null,
                errors:[],
                success:[],
                isAuth:false}
            default:
                return state
    }
}




// export 

export default authReducer