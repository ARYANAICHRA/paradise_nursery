import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../redux/CartSlice.jsx'

export default function CartItem({ navigate }) {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cartItems.length === 0 && (
          <div>
            <p>Your cart is empty.</p>
            <button className="btn" onClick={() => navigate('products')}>Continue Shopping</button>
          </div>
        )}

        {cartItems.map((item) => (
          <div className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>{item.name}</div>
              <div className="product-price">Unit: ${item.price.toFixed(2)}</div>
              <div style={{marginTop:6}} className="cart-actions">
                <button className="qty-btn" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                <div>Qty: {item.quantity}</div>
                <button className="qty-btn" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                <button className="btn" style={{marginLeft:12}} onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </div>
            </div>
            <div style={{minWidth:120,textAlign:'right'}}>
              <div style={{fontWeight:700}}>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
        ))}

        {cartItems.length > 0 && (
          <div className="summary">
            <div>
              <button className="btn" onClick={() => alert('Coming Soon')}>Checkout</button>
              <button className="btn" style={{marginLeft:8}} onClick={() => navigate('products')}>Continue Shopping</button>
            </div>
            <div style={{fontWeight:700}}>Total: ${calculateTotalAmount().toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  )
}
