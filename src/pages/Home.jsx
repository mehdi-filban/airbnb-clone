import { useSelector } from 'react-redux'

function PropertyCard({ property }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="mt-1 text-pink-500 font-semibold">${property.price} / night</p>
      </div>
    </div>
  )
}
export default function Home() {
  const { list, filtered } = useSelector(state => state.properties)

  // اگر فیلتر اعمال شده بود، filtered رو نشون می‌دیم، در غیر این صورت کل list
  const properties = filtered.length ? filtered : list

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Popular Stays</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  )
}
