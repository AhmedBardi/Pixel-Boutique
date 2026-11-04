import { ADD_PRODUCT, FAIL_PROD, GET_MY_PRODUCT, GET_PRODUCT, LOAD_PRODUCT } from "../actionType/prod.actiontype"
import axios from "axios"





export const getAllProd = () => async(dispatch) =>{
    dispatch({type:LOAD_PRODUCT})
    try {
        const result = await axios.get("/api/product/allProd")
        dispatch({type:GET_PRODUCT,payload:result.data.listProds})
    } catch (error) {
        dispatch({type:FAIL_PROD, payload:error.response.data})
    }
}

export const addNewProd = (newProd) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };


    const result = await axios.post("/api/product/addProduct", newProd, config);
    dispatch({ type: ADD_PRODUCT, payload: result.data.newProd });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};

export const getMyprod = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/product/myProd", config);
    dispatch({ type: GET_MY_PRODUCT, payload: result.data.myListProd });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};