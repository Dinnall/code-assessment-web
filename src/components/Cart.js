import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const Cart  = ({ products, total, onToggleCartClicked, onCheckoutClicked, onRemoveClicked, onDecreaseQuantityClicked, onIncreaseQuantityClicked }) => {
  const hasProducts = products.length > 0

  return (
    <div className="final_CheckOut">
      <div className="cartInfo">

       <div className="close">
        <a onClick={onToggleCartClicked}> </a>
        </div>
        <h3>Your cart</h3>

      <div>
        <hr/>
        {hasProducts ?
          <div className="cart">
            {products.map((product, index) =>
              <CartItem
                product={product}
                images={product.inventoryImages}
                onCheckoutClicked={onCheckoutClicked}
                onRemoveClicked={() => onRemoveClicked(product.id, product.quantity)}
                onDecreaseQuantityClicked={() => onDecreaseQuantityClicked(product.id)}
                onIncreaseQuantityClicked={() => onIncreaseQuantityClicked(product.id)}
                key={product.id}
              />
            )}
             <div className="cartBottom">
            <hr/>
            <span >Subtotal:</span><span >&#36;{total}</span>
            <br/><br/>
            <span >Taxes:</span><span>&#36;{(total * .0882).toFixed(2)}</span>
            <hr/>
            <span >Total:</span><span >&#36;{(total * 1.0882).toFixed(2)}</span>
            <br/>
             </div>
            <button
              className="button-checkout"
              onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
          </div>
        :
          <div>
            <p >Please add some products<br/>To your cart</p>
          </div>
        }
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onRemoveClicked: PropTypes.func,
  onIncreaseQuantityClicked: PropTypes.func,
  onDecreaseQuantityClicked: PropTypes.func,
  onToggleCartClicked: PropTypes.func
}

export default Cart