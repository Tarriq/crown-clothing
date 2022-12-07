import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyMessage,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Products</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessage>No items were selected</EmptyMessage>
      )}
      <Total>{cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
