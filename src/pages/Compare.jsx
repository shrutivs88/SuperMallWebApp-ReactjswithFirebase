import React, {useState} from 'react'
import { compareProducts } from '../services/productService'

export default function Compare(){
  const [ids, setIds] = useState(['','',''])
  const [result, setResult] = useState([])

  const run = async ()=>{
    const picks = ids.filter(Boolean)
    if(picks.length===0){ alert('Enter at least one product id'); return }
    const r = await compareProducts(picks)
    setResult(r)
  }

  return (
    <div>
      <h2 style={{color:'#D9BC61'}}>Compare Products</h2>
      <div style={{display:'flex',gap:8,marginTop:12}}>
        {ids.map((v,i)=> (
          <input key={i} placeholder="product id" value={v} onChange={e=>{ const n=[...ids]; n[i]=e.target.value; setIds(n) }} />
        ))}
        <button className="button" onClick={run}>Compare</button>
      </div>

      {result.length>0 && (
        <div style={{marginTop:16}} className="grid">
          {result.map(p=> (
            <div className="card" key={p.id}>
              <div style={{fontWeight:800,color:'#EAD89A'}}>{p.name}</div>
              <div className="small">Price: ₹{p.price}</div>
              <div className="small">Features: {p.features && p.features.join(', ')}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
