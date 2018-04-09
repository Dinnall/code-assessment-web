import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, toggleCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getTotalCartItems, getShowCart } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'


const ProductsContainer = ({ showCart, products, totalCartItems, addToCart, toggleCart }) => (
  showCart ? null :

  <div className="storeFront">
    <div className="header">
      <h2 style={{ flexGrow:1, marginBottom:0, color:'#222222', marginTop:'1rem' }}>Acme Store</h2>
      <a
        onClick={toggleCart}
        className="span-rightBottom">
        <span>
          <img
            src="./img/cart.svg"
            style={{ width:'20px', marginRight:'6px', position:'relative', top:'2px' }}></img>
          {totalCartItems > 0 ? 'You have ' + totalCartItems + ' item' + (totalCartItems > 1 ? 's' : '') + ' in your cart' : 'Your cart is empty'}
        </span>
      </a>
    </div>

    <hr/>

    <ProductsList>
      {products.map((product, index) =>
        <ProductItem
          key={product.id}
          product={product}
          heroImage={product.productImage}
          onAddToCartClicked={() => addToCart(product.id)} />
      )}
    </ProductsList>
  </div>

)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  totalCartItems: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  totalCartItems: getTotalCartItems(state),
  showCart: getShowCart(state)
})

export default connect(
  mapStateToProps,
  { addToCart, toggleCart }
)(ProductsContainer)
