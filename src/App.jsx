import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Landing  from './pages/Landing'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}
      <Route path="/stays" element={<Home />} />
      <Route path="/stays/:id" element={<PropertyDetails />} />
    </Routes>
  )
}
