import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropertyNotFound from './PropertyNotFound'
import { motion } from 'framer-motion'

export default function PropertyDetails() {
  const { id } = useParams()
  const numerticId = Number(id)

  const { list } = useSelector(state => state.properties)
  const property = list.find(p => p.id === numerticId)

  if (!property) {
    return <PropertyNotFound />
  }
  return (
    <motion.div
      className="bg-gray-50 min-h-screen py-6 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/stays" className="text-sm text-gray-600 underline">
        ← Back to Stays
      </Link>

      <div className="mt-4 bg-white rounded-2xl shadow-sm overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-72 object-cover" />

        <div className="p-6 space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-pink-500 font-semibold text-lg">${property.price} / night</p>
          <p className="text-gray-700 mt-2">{property.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
