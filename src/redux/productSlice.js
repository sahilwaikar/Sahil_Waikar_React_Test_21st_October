import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let productToAdd = action.payload;
            productToAdd.map((prod) => {
                state.push(prod);
            })
        }
    }
})

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;