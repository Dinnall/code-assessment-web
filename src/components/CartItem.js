import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ product, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked, images }) => (

  <div className="productItem">
    <div className= "finalCheckOutPhoto" src={`./images/${product.inventoryImages}`} alt={product.productTitle} />
    <h4>{product.productTitle}</h4>
      <p className="price">&#36;{product.price.value}</p>
      <p  className="remove"  onClick={onRemoveClicked}> Remove </p>
       <div  className="quantity">
        <button
        className="subtract"
        onClick={onDecreaseQuantityClicked}
        disabled={product.quantity > 0 ? '' : 'disabled'}>
          -
        </button>

        <div>
          {product.quantity}
        </div>
          <button
          className="add"
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
  images: PropTypes.string.isRequired
}

export default CartItem