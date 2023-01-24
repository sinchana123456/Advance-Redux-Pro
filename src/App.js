import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { cartAction } from './store/cart-reducer';
import Notification from '../src/components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.cart.showCart);
  const cart = useSelector(state => state.cartItems);
  const notification = useSelector(state => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async() => {
      dispatch(cartAction.ShowNotification({
        status: 'pending',
        title: 'sending...',
        message: 'Sending cart data'
      }))
      const res = await fetch(
        'https://cart-item-page-default-rtdb.firebaseio.com/cart.json',
    {
      method: 'PUT',
      body: JSON.stringify(cart)
    })
    if(!res.ok){
      dispatch(cartAction.ShowNotification({
        status: 'Error!',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))    
    }
    dispatch(cartAction.ShowNotification({
      status: 'success!',
      title: 'success!',
      message: 'Sent cart data successfully!'
    }))
    } 
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(cartAction.ShowNotification({
        status: 'error!',
        title: 'Error!',
        message: 'Sending cart data failed!'
      })) 
    })
  },[cart, dispatch]);

  return (
    <Fragment>
      {notification && (<Notification 
        status={notification.status} 
        title={notification.title} 
        message={notification.message} 
      />)}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
