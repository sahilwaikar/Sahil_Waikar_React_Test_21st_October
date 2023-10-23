import { configureStore } from "@reduxjs/toolkit";
import productReducer from './redux/productSlice';
import cartReducer from './redux/CartSlice';

export default configureStore({
    reducer:  {
        product: productReducer,
        cart: cartReducer,
    }
});