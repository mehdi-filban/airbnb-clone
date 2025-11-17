import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../features/properties/propertiesSlice'

export default function PropertyCard({ property }) {
  const dispatch = useDispatch()
  const isFavorite = useSelector(state => state.properties.favorites.includes(property.id))

  const handleFavoriteClick = e => {
    e.preventDefault() // نذار لینک اجرا بشه
    e.stopPropagation() // کلیک به Link منتقل نشه
    dispatch(toggleFavorite(property.id))
  }

  return (
    <Link to={`/property/${property.id}`}>
      <motion.div
        className="border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white cursor-pointer relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={property.image} alt={property.title} className="h-48 w-full object-cover" />

        {/* favorite button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white/80 rounded-full p-3 text-l hover:bg-white transition cursor-pointer"
        >
          <span className={isFavorite ? 'text-pink-500' : 'text-gray-400'}>
            {isFavorite ? '♥' : '♡'}
          </span>
        </button>

        <div className="p-3">
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="mt-1 text-pink-500 font-semibold">${property.price} / night</p>
        </div>
      </motion.div>
    </Link>
  )
}
