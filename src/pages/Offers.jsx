import React, {useEffect, useState} from 'react'
import { listActiveOffers } from '../services/offerService'

export default function Offers(){
  const [offers, setOffers] = useState([])
  useEffect(()=>{ listActiveOffers().then(setOffers).catch(()=>setOffers([])) },[])
  return (
    <div>
      <h2 style={{color:'#D9BC61'}}>Active Offers</h2>
      <div className="grid" style={{marginTop:12}}>
        {offers.map(o=> (
          <div className="card" key={o.id}>
            <div style={{fontWeight:700}}>{o.title}</div>
            <div className="small">{o.description}</div>
            <div style={{marginTop:8}} className="small">Shop: {o.shopName || o.shopId}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
