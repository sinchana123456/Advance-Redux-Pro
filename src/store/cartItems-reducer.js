import { createSlice } from "@reduxjs/toolkit";

const cartItemsInitialState = {
    items: [],
    totalQuantity: 0,
};

const CartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: cartItemsInitialState,
    reducers: {
        addItemsToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem) {
                state.items.push({
                    key: newItem.id,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; 
            }
        },
        removeItemsFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
});

export const cartItemsAction = CartItemsSlice.actions;
export default CartItemsSlice.reducer;