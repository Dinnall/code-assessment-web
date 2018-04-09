import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ product, onAddToCartClicked, images }) => (

  <div>
     <div>
      <div>
          <h3>{product.productTitle}</h3>
          <span>
            <h5>&#36;{product.price.value}</h5>
          </span>
        </div>

        <p>{product.inventory ? `${product.inventory}` + " REMAINING" : ' '}</p>
        <img src={`./images/${product.inventoryImages}`} alt={product.productTitle} />
        <button
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>

      </div>

  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  images: PropTypes.string.isRequired
}

export default ProductItem
