import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'

export default function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [view, setView] = useState('home') // 'home' | 'products' | 'cart' | 'about'

  const navigate = (v) => {
    if (v === 'products') {
      setShowProducts(true)
      setView('products')
    } else if (v === 'home') {
      setShowProducts(false)
      setView('home')
    } else {
      setView(v)
    }
  }

  return (
    <div className="app-root">
      {view !== 'home' && <Navbar navigate={navigate} />}

      {!showProducts && (
        <div className="landing">
          <div className="landing-inner">
            <h1 className="title">Paradise Nursery</h1>
            <p className="subtitle">Bring nature home — one plant at a time</p>
            <div className="cta-row">
              <button className="btn primary" onClick={() => setShowProducts(true)}>Get Started</button>
              <button className="btn" onClick={() => navigate('about')}>About Us</button>
            </div>
          </div>
        </div>
      )}

      {showProducts && view === 'products' && <ProductList navigate={navigate} />}
      {view === 'cart' && <CartItem navigate={navigate} />}
      {view === 'about' && <AboutUs navigate={navigate} />}
    </div>
  )
}
