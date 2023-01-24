import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from '../src/components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.cart.showCart);
  const cart = useSelector(state => state.cartItems);
  const notification = useSelector(state => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.isChanged) {
      dispatch(sendCartData(cart))
    }
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
