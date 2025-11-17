import SearchBar from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { filterProperties, resetFilter } from '../features/properties/propertiesSlice'
import PropertyCard from '../components/PropertyCard'

export default function Home() {
  const dispatch = useDispatch()
  const { list, filtered, favorites } = useSelector(state => state.properties)

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  // اگر فیلتر اعمال شده بود، filtered
  const baseProperties = filtered.length ? filtered : list
  const properties = showOnlyFavorites
    ? baseProperties.filter(p => favorites.includes(p.id))
    : baseProperties

  const handleFilter = ({ location, maxPrice }) => {
    if (!location && !maxPrice) {
      dispatch(resetFilter())
      return
    }

    dispatch(filterProperties({ location, maxPrice }))
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Popular Stays</h1>

      <SearchBar onFilter={handleFilter} />
      <button
        onClick={() => setShowOnlyFavorites(prev => !prev)}
        className={
          'px-3 py-1 rounded-full text-sm border ' +
          (showOnlyFavorites
            ? 'bg-pink-500 text-white border-pink-500'
            : 'bg-white text-gray-700 border-gray-300')
        }
      >
        {showOnlyFavorites ? 'Show all' : 'Show only favorites'}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {properties.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  )
}
