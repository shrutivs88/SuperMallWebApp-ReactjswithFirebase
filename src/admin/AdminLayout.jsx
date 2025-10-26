import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'

export default function AdminLayout({children}){
  return (
    <div className="admin-root">
      <header className="admin-header">
        <div className="brand">Super Mall Admin</div>
        <nav className="admin-nav">
          <Link to="/admin/shops">Shops</Link>
          <Link to="/admin/offers">Offers</Link>
          <Link to="/admin/categories">Categories</Link>
          <Link to="/admin/floors">Floors</Link>
        </nav>
      </header>

      <div className="admin-content">
        {children}
      </div>
    </div>
  )
}
