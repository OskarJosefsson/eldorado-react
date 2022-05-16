import { createSlice } from "@reduxjs/toolkit";
import _products from "../data/products"

const initialState = {loading: false, list: [] };

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        startfetch(state){
            state.loading=true;
        },
        save(state,action){
            const {payload} = action;
            state.loading = false;
            state.list = payload;
        }
    }
});

export const {startfetch,save} = productsSlice.actions;

export const fetchProducts = () => async (dispatch) =>{
    dispatch(save([]));
    dispatch(startfetch());
    
    const products = await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(_products);

        },800);
    });
    dispatch(save(products));
};
const productsReducer = productsSlice.reducer;

export default productsReducer;
