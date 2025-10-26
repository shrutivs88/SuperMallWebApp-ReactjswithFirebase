import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard(){
  return (
    <div>
      <h2 style={{color:'#D9BC61'}}>Admin Dashboard</h2>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <Link className="button" to="/admin/shops">Manage Shops</Link>
        <Link className="button" to="/admin/offers">Manage Offers</Link>
        <Link className="button" to="/admin/categories">Manage Categories</Link>
        <Link className="button" to="/admin/floors">Manage Floors</Link>
      </div>
      <div className="card" style={{marginTop:16}}>Use the admin panels to manage content.</div>
    </div>
  )
}
