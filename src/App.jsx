import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function PropertyDetailsPlaceholder() {
  return <div className="p-6">Property Details Placeholder</div>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetailsPlaceholder />} />
    </Routes>
  )
}
