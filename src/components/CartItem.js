import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ product, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked, images }) => (

  <div>
      <div>
         <div>
            <h3>{product.productTitle}</h3>
              <p className="price">&#36;{product.price.value}</p>
            <img src={`./images/${product.inventoryImages}`} alt={product.productTitle} />
            <a onClick={onRemoveClicked}>
            Remove
          </a>
        </div>
      </div>
      <div>
        <button
        onClick={onDecreaseQuantityClicked}
        disabled={product.quantity > 0 ? '' : 'disabled'}>
          -
        </button>

        <div>
          {product.quantity}
        </div>

        <button
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