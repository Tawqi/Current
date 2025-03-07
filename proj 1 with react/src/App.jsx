import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
