import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-reducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cartItems.totalQuantity);

  const showCartHandler = () => {
    dispatch(cartAction.onShowCart())
  }

  return (
    <button 
      onClick={showCartHandler}
      className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
