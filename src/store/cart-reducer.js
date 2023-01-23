import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    showCart: false,
    notification: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        onShowCart(state){
            state.showCart = !state.showCart
        },
        ShowNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
