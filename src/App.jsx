import { BrowserRouter, Route, Routes, Outlet, } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Shop from './components/Shop'
import View from './components/View'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'
import Header from './components/Header'
import Detail from './components/Detail'
import Basket from './components/Basket'
import Email from './components/Email'
import Login from './components/login'
import Footer from './components/Footer'
import Profile from './pages/Profile'

// Layout with Header
function MainLayout({ search, setSearch }) {
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  )
}

// Layout without Header
function AuthLayout() {
  return <Outlet />
}

function App() {

  const [search, setSearch] = useState("");
  const [isLoginned, setLoginned] = useState(true)
  localStorage.setItem("logginned", isLoginned)

  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Header */}
        <Route element={<MainLayout search={search} setSearch={setSearch} />}>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewAll" element={<View />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Pages without Header */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/email" element={<Email />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
