import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getShopById, getProductsByShop } from '../services/shopService'

export default function ShopDetails(){
  const { id } = useParams()
  const [shop, setShop] = useState(null)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    if(!id) return
    getShopById(id).then(setShop)
    getProductsByShop(id).then(setProducts)
  },[id])

  if(!shop) return <div className="card">Loading...</div>
  return (
    <div>
      <div className="card">
        <div className="shop-name">{shop.name}</div>
        <div className="small">{shop.address}</div>
        <div style={{marginTop:12}}><strong>Category:</strong> {shop.categoryName || shop.categoryId}</div>
      </div>

      <h3 style={{color:'#D9BC61', marginTop:16}}>Products</h3>
      <div className="grid" style={{marginTop:12}}>
        {products.map(p=> (
          <div className="card" key={p.id}>
            <div style={{fontWeight:700}}>{p.name}</div>
            <div className="small">₹{p.price}</div>
            <div style={{marginTop:8}} className="small">{p.features && p.features.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
