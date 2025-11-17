import { Link } from 'react-router-dom'

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-xl text-gray-700 mb-4">Hmmmm... Location Not Found... 🤔</p>
      <Link to="/" className="text-pink-500 underline">
        Back to home
      </Link>
    </div>
  )
}
