import { cartAction } from "./cart-reducer"
import { cartItemsAction } from "./cartItems-reducer"

export const fetchCartData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const res = await fetch(
                'https://cart-item-page-default-rtdb.firebaseio.com/cart.json'
            )
            if(!res.ok) {
                throw new Error('Fetching cart items failed!');
            }
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartItemsAction.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(cartAction.ShowNotification({
                status: 'Error!',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))   
        }
    }
}

export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(cartAction.ShowNotification({
            status: 'pending',
            title: 'sending...',
            message: 'Sending cart data'
        }))

        const sendRequest = async() => {
            const res = await fetch(
                'https://redux-cart-45953-default-rtdb.firebaseio.com/cart.json',
                {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }
                )
                }
            )
            if(!res.ok){
            dispatch(cartAction.ShowNotification({
                status: 'Error!',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))    
        }
    }
        try {
            await sendRequest();
            dispatch(cartAction.ShowNotification({
                status: 'success!',
                title: 'success!',
                message: 'Sent cart data successfully!'
            }))
        } catch (error) {
            dispatch(cartAction.ShowNotification({
                status: 'error!',
                title: 'Error!',
                message: 'Sending cart data failed!'
            })) 
        }
    }
}