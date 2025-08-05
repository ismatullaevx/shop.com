import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Shop from './components/Shop'
import View from './components/View'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'
import Header from './components/Header'
import Detail from './components/Detail'


function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header search={search} setSearch={setSearch} />
      <div>
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewAll" element={<View />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
