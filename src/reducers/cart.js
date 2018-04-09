import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  TOGGLE_SHOPPING_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  showCart: false
}

const addedIds = (state = initialState.addedIds, action, quantity) => {

  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]

    case REMOVE_FROM_CART:
      if(quantity === 1) {
        return state.filter(tempId => tempId !== action.productId)
      }
      return state

    case REMOVE_FROM_CART:
      return state.filter(tempId => tempId !== action.productId)

    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }

    case REMOVE_FROM_CART:
      return { ...state,
        [productId]: state[productId] - 1
      }

    case REMOVE_FROM_CART:
      return { ...state,
        [productId]: 0
      }

    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getCartStatus = state => state.showCart

const cart = (state = initialState, action) => {

  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState

    case CHECKOUT_FAILURE:
      return action.cart

    case TOGGLE_SHOPPING_CART:
      return {
        ...state,
        showCart: !state.showCart
      }

    default:
      return {
        addedIds: addedIds(state.addedIds, action, state.quantityById[action.productId]),
        quantityById: quantityById(state.quantityById, action),
        showCart: state.showCart
      }
  }
}

export default cart
