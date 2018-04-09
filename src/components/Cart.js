import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const Cart  = ({ products, total, onToggleCartClicked, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked }) => {
  const hasProducts = products.length > 0

  return (
    <div className="cartFront">
      <div className="closeBtnHolder">
        <a onClick={onToggleCartClicked}>
          <img
            src="./img/cart_closeButton.svg"
            className="cartCloseBtn"/>
        </a>
      </div>

      <div className="cartContent">
        <h3>Your cart</h3>
        <hr/>
        {hasProducts ?
          //If there are products in the cart, render out the cart items
          <div>
            {products.map((product, index) =>
              <CartItem
                product={product}
                heroImage={product.productImage}
                onCheckoutClicked={onCheckoutClicked}
                onRemoveClicked={() => onRemoveClicked(product.id, product.quantity)}
                onDecreaseQuantityClicked={() => onDecreaseQuantityClicked(product.id)}
                onIncreaseQuantityClicked={() => onIncreaseQuantityClicked(product.id)}
                key={product.id}
              />
            )}

            <hr/>
            <span style={{ color:'#9D9D9D' }}>Subtotal:</span><span style={{ float:'right' }}>&#36;{total}</span>
            <br/><br/>
            <span style={{ color:'#9D9D9D' }}>Taxes:</span><span style={{ float:'right' }}>&#36;{(total * .0882).toFixed(2)}</span>
            <hr/>
            <span style={{ color:'#9D9D9D' }}>Total:</span><span style={{ float:'right' }}>&#36;{(total * 1.0882).toFixed(2)}</span>
            <br/>
            <button
              className="button-checkout"
              onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
          </div>
        :
          //If nothing is in the cart, show the following
          <div className="emptyCart">
            <img src="./img/cart.svg"/>
            <p style={{ color:'#919191' }}>Please add some products<br/>To your cart</p>
          </div>
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onRemoveClicked: PropTypes.func,
  onIncreaseQuantityClicked: PropTypes.func,
  onDecreaseQuantityClicked: PropTypes.func,
  onToggleCartClicked: PropTypes.func
}

export default Cart