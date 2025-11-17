import { useState } from 'react'

export default function SearchBar({ onFilter }) {
  const [location, setLocation] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleSubmit = e => {
    e.preventDefault() // جلوگیری از رفرش شدن صفحه
    onFilter({ location, maxPrice }) // فرستادن داده‌ها به والد (Home)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 bg-white border-none rounded-full px-4 py-3 shadow-sm"
    >
      <input
        type="text"
        placeholder="Where to?"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="flex-1 outline-none border-none text-gray-700"
      />

      <input
        type="number"
        placeholder="Max price ($)"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        className="w-28 outline-none border-none text-gray-700"
      />

      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
      >
        Search
      </button>
    </form>
  )
}
