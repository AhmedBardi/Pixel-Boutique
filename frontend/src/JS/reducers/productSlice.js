import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoadProd: false,
    products: [],
    MyProd: [],
    prod: {},
    error: null
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state) => {
            state.isLoadProd = true;
        },
        getProduct: (state, action) => {
            state.isLoadProd = false;
            state.products = action.payload;
        },
        failProd: (state, action) => {
            state.isLoadProd = false;
            state.error = action.payload;
        },
        addProduct: (state, action) => {
            state.isLoadProd = false;
            state.products.push(action.payload); // Redux Toolkit allows mutation-like syntax safely via Immer
        },
        getMyProduct: (state, action) => {
            state.isLoadProd = false;
            state.MyProd = action.payload;
        }
    }
});

// Export the auto-generated actions
export const { 
    loadProduct, 
    getProduct, 
    failProd, 
    addProduct, 
    getMyProduct 
} = productSlice.actions;

// Export the reducer to be included in your store
export default productSlice.reducer;