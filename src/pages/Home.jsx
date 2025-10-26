import React, {useEffect, useState} from 'react'
import { getCategories } from '../services/categoryService'
import { Link } from 'react-router-dom'

export default function Home(){
  const [cats, setCats] = useState([])
  useEffect(()=>{ getCategories().then(setCats).catch(()=>setCats([])) },[])

  return (
    <div>
      <h1 style={{color:'#D9BC61'}}>Welcome to SuperMall</h1>
      <section className="grid" style={{marginTop:12}}>
        {cats.map(c=> (
          <Link key={c.id} to={`/shops?category=${c.id}`} className="card">
            <div className="shop-name">{c.name}</div>
            <div className="small">{c.description}</div>
          </Link>
        ))}
      </section>
    </div>
  )
}
