import cartReducer from "./cart-reducer";
import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./cartItems-reducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartItems: cartItemsReducer
    }
});

export default store;