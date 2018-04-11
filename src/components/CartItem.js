import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ product, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked, heroImage }) => (

  <div className="cartItem" >
      <div className="cartItemBlock">
    <div className= "finalCheckOutPhoto" src={`./images/${product.inventoryImages}`} alt={product.productTitle} />
       <div className="productInfo">
            <h3 style={{ marginBottom:'1rem' }}>{product.productTitle}</h3>
          <a
            className="copyBlock"
            style={{ alignSelf:'end', color:'#CC1D39'}}
            onClick={onRemoveClicked}>
            Remove
          </a>
        </div>
      </div>
      <div className="cartQuantity">
        <button
        className="button-cartQuantity cartItemDecrease"
        onClick={onDecreaseQuantityClicked}
        disabled={product.quantity > 0 ? '' : 'disabled'}>
          -
        </button>
       <div className="cartItemQuantity">
          <span className="quantityOutput">{product.quantity}</span>
        </div>

        <button
          className="button-cartQuantity cartItemIncrease"
          onClick={onIncreaseQuantityClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          +
        </button>
      </div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    inventory: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onCheckoutClicked: PropTypes.func.isRequired,
  onRemoveClicked: PropTypes.func.isRequired,
  onIncreaseQuantityClicked: PropTypes.func.isRequired,
  onDecreaseQuantityClicked: PropTypes.func.isRequired,
  heroImage: PropTypes.string.isRequired
}

export default CartItem