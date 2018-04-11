import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'



const Cart  = ({ products, total, onToggleCartClicked, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        product={product}
        images={product.inventoryImages}
        onCheckoutClicked={onCheckoutClicked}
        onRemoveClicked={() => onRemoveClicked(product.id, product.quantity)}
        onDecreaseQuantityClicked={() => onDecreaseQuantityClicked(product.id)}
        onIncreaseQuantityClicked={() => onIncreaseQuantityClicked(product.id)}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to your cart.</em>
  )

  return (
    <div id="final_CheckOut">
      <div className="cartInfo">
        <div className="cartTop">
          <div className="close"></div>
           <a onClick={onToggleCartClicked}> </a>
           <h3>Your Cart</h3>
          <hr/>
        </div>
        <div className="cart">{nodes}</div>
        <div className="cartBottom">
          <p className={hasProducts ? "total" : "none"}>
          <hr/>Total: <span className="priceTotal"> &#36;{total}</span>
          </p>
          <button
            className="button-checkout"
            onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            CHECKOUT
          </button>
        </div>
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