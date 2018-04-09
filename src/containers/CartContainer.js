import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../actions'
import { getTotalPrice, getCartProducts, getShowCart } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ showCart, toggleCart, products, total, checkout, removeFromCart, increaseQuantity, decreaseQuantity }) => (
  showCart ?

  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onRemoveClicked={removeFromCart}
    onIncreaseQuantityClicked={increaseQuantity}
    onDecreaseQuantityClicked={decreaseQuantity}
    onToggleCartClicked={toggleCart}
  />

  : null
)


CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotalPrice(state),
  showCart: getShowCart(state)
})

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, increaseQuantity, decreaseQuantity, toggleCart }
)(CartContainer)
