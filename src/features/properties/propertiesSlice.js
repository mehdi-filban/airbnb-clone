import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      title: 'Cozy Apartment',
      location: 'New York',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
      description: 'A cozy apartment in the heart of the city',
      price: 120,
    },
    {
      id: 2,
      title: 'Luxury Villa',
      location: 'Los Angeles',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww',
      description: 'A luxurious villa in the heart of the city',
      price: 200,
    },
    {
      id: 3,
      title: 'Modern Apartment',
      location: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww',
      description: 'A modern apartment in the heart of the city',
      price: 150,
    },
  ],
  favorites: [],
  filtered: [],
}

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    filterProperties: (state, action) => {
      const { location, maxPrice } = action.payload || {}
      state.filtered = state.list.filter(p => {
        const matchLocation = location
          ? p.location.toLowerCase().includes(String(location).toLowerCase())
          : true

        const matchPrice = maxPrice ? p.price <= Number(maxPrice) : true
        return matchLocation && matchPrice
      })
    },

    resetFilter: state => {
      state.filtered = []
    },

    toggleFavorite: (state, action) => {
      const id = action.payload
      const exists = state.favorites.includes(id)

      if (exists) {
        state.favorites = state.favorites.filter(fId => fId !== id)
      } else {
        state.favorites.push(id)
      }
    },
  },
})

export const { filterProperties, resetFilter, toggleFavorite } = propertiesSlice.actions
export default propertiesSlice.reducer
