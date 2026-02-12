import React, { useState } from 'react'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

export default function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const goToProducts = () => {
    setShowCart(false)
    setShowProducts(true)
  }

  const goToCart = () => {
    setShowCart(true)
    setShowProducts(false)
  }

  return (
    <>
      {!showProducts && !showCart && (
        <div className="landing-container">
          <h1>Welcome to Paradise Nursery</h1>
          <button className="get-started-btn" onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      )}

      {showProducts && <ProductList goToCart={goToCart} goToProducts={goToProducts} />}
      {showCart && <CartItem goToProducts={goToProducts} goToCart={goToCart} />}
    </>
  )
}
