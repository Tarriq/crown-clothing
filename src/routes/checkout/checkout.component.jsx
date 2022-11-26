import { useContext } from "react"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../contexts/cart.context"
import { 
  CheckoutContainer, 
  CheckoutHeader, 
  HeaderBlock,
  Total
} from './checkout.styles'


const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

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
          cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <span>No items were selected</span>
        )
        }
        <Total>{cartTotal}</Total>
    </CheckoutContainer>
  )

}

export default Checkout