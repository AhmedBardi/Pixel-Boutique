import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../actionType/auth.actionType";
import axios from "axios";

// L'action qui gère l'enregistrement
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/auth/register", newUser);
        
        // Save token to localStorage
        if (result.data?.token) {
            localStorage.setItem("token", result.data.token);
        }

        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        
        // Navigate to profile if SUCCESS
        navigate('/profile');
    } catch (error) {
        const errorMsg = error.response?.data?.errors || error.response?.data?.msg || "Registration failed";
        dispatch({ type: FAIL_AUTH, payload: errorMsg });
    }
};

// L'action qui gére la connexion
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/auth/login", user);
        
        // Save token to localStorage
        if (result.data?.token) {
            localStorage.setItem("token", result.data.token);
        }

        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        
        if (navigate) navigate('/profile');
    } catch (error) {
        const errorMsg = error.response?.data?.msg || error.response?.data?.errors || "Login failed";
        dispatch({ type: FAIL_AUTH, payload: errorMsg });
    }
};

// L'action qui gère la personne authentifiée 
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        const result = await axios.get("/api/auth/current", config);
        dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
        const errorMsg = error.response?.data?.errors || "Session expired";
        dispatch({ type: FAIL_AUTH, payload: errorMsg });
    }
};

// L'action qui gère la déconnexion (FIXED)
export const logout = (navigate) => async (dispatch) => {
    // 1. Destroy the token in localStorage so it disappears from 'Inspect'
    localStorage.removeItem("token");

    // 2. Clear user state from Redux
    dispatch({ type: LOGOUT_AUTH });

    // 3. Kick them back to the login page
    if (navigate) navigate('/login');
};