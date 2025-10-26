import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getShopsByFloor } from '../services/shopService'

export default function FloorDetails(){
  const { floorId } = useParams()
  const [shops, setShops] = useState([])
  useEffect(()=>{ if(floorId) getShopsByFloor(floorId).then(setShops).catch(()=>setShops([])) },[floorId])
  return (
    <div>
      <h2 style={{color:'#D9BC61'}}>Floor {floorId}</h2>
      <div className="grid" style={{marginTop:12}}>
        {shops.map(s=> (
          <div className="card" key={s.id}>
            <div className="shop-name">{s.name}</div>
            <div className="small">{s.address}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
