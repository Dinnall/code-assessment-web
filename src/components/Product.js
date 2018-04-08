import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, productTitle }) => (
  <div>
    {productTitle} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  productTitle: PropTypes.string
}

export default Product
