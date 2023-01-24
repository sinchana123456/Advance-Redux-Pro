import { createSlice } from "@reduxjs/toolkit";

const cartItemsInitialState = {
    items: [],
    totalQuantity: 0,
    isChanged: false
};

const CartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: cartItemsInitialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemsToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.isChanged=true;
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
            state.isChanged=true;
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