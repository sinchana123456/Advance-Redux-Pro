import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        onShowCart(state){
            state.showCart = !state.showCart
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
