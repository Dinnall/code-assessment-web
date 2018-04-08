import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const removeFromCart = (productId,quantity)=> (dispatch, getState) =>{
  dispatch({
    type: types.REMOVE_FROM_CART,
    productId,
    quantity
  })
}

export const increaseQuantity = productId => (dispatch, getState) =>{
  if(getState().products.byId[productId].inventory > 0){
    dispatch(addToCartUnsafe(productId))
  }
}

export const toggleCart = () =>(dispatch, getState) => {
  dispatch({
    type: types.TOGGLE_SHOPPING_CART
  })
}

export const decreaseQuantity = productId => (dispatch, getState) => {
  dispatch({
    type: types.DECREASE_FROM_CART_QUANTITY,
    productId
  })
}







