// import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ShopList from './pages/ShopList'
import ShopDetails from './pages/ShopDetails'
import Offers from './pages/Offers'
import Compare from './pages/Compare'
import FloorDetails from './pages/FloorDetails'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminShops from './admin/AdminShops'
import AdminOffers from './admin/AdminOffers'
import AdminCategories from './admin/AdminCategories'
import AdminFloors from './admin/AdminFloors'
import AdminProtectedRoute from './admin/AdminProtectedRoute'

export default function App(){
  return (
    <Router>
      <div className="app-root">
        <nav className="nav">
          <div className="brand">SuperMall</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shops">Shops</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/admin/login">Admin</Link>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shops" element={<ShopList/>} />
            <Route path="/shop/:id" element={<ShopDetails/>} />
            <Route path="/offers" element={<Offers/>} />
            <Route path="/compare" element={<Compare/>} />
            <Route path="/floors/:floorId" element={<FloorDetails/>} />

            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />

            <Route path="/admin/shops" element={<AdminProtectedRoute><AdminShops/></AdminProtectedRoute>} />
            <Route path="/admin/offers" element={<AdminProtectedRoute><AdminOffers/></AdminProtectedRoute>} />
            <Route path="/admin/categories" element={<AdminProtectedRoute><AdminCategories/></AdminProtectedRoute>} />
            <Route path="/admin/floors" element={<AdminProtectedRoute><AdminFloors/></AdminProtectedRoute>} />
          </Routes>
        </main>

        <footer className="footer">© SuperMall</footer>
      </div>
    </Router>
  )
}
