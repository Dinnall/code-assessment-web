import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getCartStatus = state => fromCart.getCartStatus(state.cart)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

// console.log(getCartStatus())

export const getTotalPrice = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price.value * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getTotalCartItems = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getQuantity(state, id),
      0
    )

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

export const getShowCart = state =>
  getCartStatus(state)
