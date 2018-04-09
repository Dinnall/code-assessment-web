import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ product, onAddToCartClicked, heroImage }) => (
  <div className="productItem" >

      <div
        className="productImage"
        style={{backgroundImage: 'url("./img/' + heroImage + '")'}}>
      </div>

      <div className="productInfo">

        <div style={{ display:'flex' }}>
          <h3 style={{ flexGrow:1, marginBottom:'1rem' }}>{product.productTitle}</h3>
          <span
            className="span-rightBottom"
            style={{ color:'#202020' }}>
            <h5>&#36;{product.price.value}</h5>
          </span>
        </div>

        <p style={{ color:'#939393', flexGrow:1 }}>{product.inventory ? `${product.inventory}` + " REMAINING" : ' '}</p>

        <button
          style={{ alignSelf:'end' }}
          className="button-product"
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
  heroImage: PropTypes.string.isRequired
}

export default ProductItem
