import React, {useEffect, useState} from 'react'
import { getShops } from '../services/shopService'
import { Link, useLocation } from 'react-router-dom'

function useQuery(){ return new URLSearchParams(useLocation().search) }

export default function ShopList(){
  const [shops, setShops] = useState([])
  const query = useQuery()
  const categoryFilter = query.get('category') || ''
  useEffect(()=>{ getShops().then(setShops).catch(()=>setShops([])) },[])

  const filtered = shops.filter(s => categoryFilter ? s.categoryId===categoryFilter : true)

  return (
    <div>
      <h2 style={{color:'#D9BC61'}}>Shop Directory</h2>
      <div className="grid" style={{marginTop:12}}>
        {filtered.map(s=> (
          <div className="card" key={s.id}>
            <div className="shop-name">{s.name}</div>
            <div className="small">{s.address}</div>
            <div style={{marginTop:8}}>
              <Link to={`/shop/${s.id}`} className="button">View Shop</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
