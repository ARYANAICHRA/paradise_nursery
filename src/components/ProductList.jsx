import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../redux/CartSlice.jsx'

const placeholder = (text) => `https://via.placeholder.com/150?text=${encodeURIComponent(text)}`

const CATEGORIES = [
  {
    id: 'indoor',
    title: 'Indoor Plants',
    items: [
      { id: 'i1', name: 'Fiddle Leaf Fig', price: 45, image: placeholder('Fiddle') },
      { id: 'i2', name: 'Snake Plant', price: 25, image: placeholder('Snake') },
      { id: 'i3', name: 'Monstera', price: 40, image: placeholder('Monstera') },
      { id: 'i4', name: 'ZZ Plant', price: 30, image: placeholder('ZZ') },
      { id: 'i5', name: 'Pothos', price: 15, image: placeholder('Pothos') },
      { id: 'i6', name: 'Peace Lily', price: 20, image: placeholder('PeaceLily') }
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor Plants',
    items: [
      { id: 'o1', name: 'Maple Sapling', price: 60, image: placeholder('Maple') },
      { id: 'o2', name: 'Hydrangea', price: 35, image: placeholder('Hydrangea') },
      { id: 'o3', name: 'Rose Bush', price: 28, image: placeholder('Rose') },
      { id: 'o4', name: 'Lavender', price: 18, image: placeholder('Lavender') },
      { id: 'o5', name: 'Boxwood', price: 32, image: placeholder('Boxwood') },
      { id: 'o6', name: 'Olive Tree', price: 120, image: placeholder('Olive') }
    ]
  },
  {
    id: 'succulents',
    title: 'Succulents',
    items: [
      { id: 's1', name: 'Aloe Vera', price: 10, image: placeholder('Aloe') },
      { id: 's2', name: 'Echeveria', price: 12, image: placeholder('Echeveria') },
      { id: 's3', name: 'String of Pearls', price: 14, image: placeholder('Pearls') },
      { id: 's4', name: 'Haworthia', price: 11, image: placeholder('Haworthia') },
      { id: 's5', name: 'Sedum', price: 9, image: placeholder('Sedum') },
      { id: 's6', name: 'Crassula', price: 13, image: placeholder('Crassula') }
    ]
  }
]

export default function ProductList({ navigate }) {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const inCart = (id) => cartItems.some((c) => c.id === id)

  return (
    <div className="container">
      <h2>Plant Categories</h2>
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-title">{cat.title}</div>
            <div className="products">
              {cat.items.map((p) => (
                <div className="product" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <div className="product-info">
                    <div className="product-name">{p.name}</div>
                    <div className="product-price">${p.price.toFixed(2)}</div>
                  </div>
                  <div>
                    <button
                      className="btn"
                      disabled={inCart(p.id)}
                      onClick={() => dispatch(addItem(p))}
                    >
                      {inCart(p.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
