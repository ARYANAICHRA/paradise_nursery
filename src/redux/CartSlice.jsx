import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id)
        } else {
          item.quantity = quantity
        }
      }
    }
  }
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) => state.cart.items.reduce((sum, it) => sum + it.quantity, 0)
export const selectCartTotalAmount = (state) => state.cart.items.reduce((sum, it) => sum + it.price * it.quantity, 0)

export default cartSlice.reducer
