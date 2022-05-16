import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export default store;