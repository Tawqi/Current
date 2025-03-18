import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import ProductPage from "./pages/ProductPage"
import Dashboard from './Dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
