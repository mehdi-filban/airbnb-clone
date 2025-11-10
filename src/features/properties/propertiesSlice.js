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
        'https://images.unsplash.com/photo-1600585154514-1d46fa9b4c8c?auto=format&fit=crop&w=800&q=60',
      description: 'A luxurious villa in the heart of the city',
      price: 200,
    },
    {
      id: 3,
      title: 'Modern Apartment',
      location: 'Chicago',
      image:
        '"https://images.unsplash.com/photo-1600585154084-7f47243d65a8?auto=format&fit=crop&w=800&q=60',
      description: 'A modern apartment in the heart of the city',
      price: 150,
    },
  ],
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
  },
})

export const { filterProperties, resetFilter } = propertiesSlice.actions
export default propertiesSlice.reducer
