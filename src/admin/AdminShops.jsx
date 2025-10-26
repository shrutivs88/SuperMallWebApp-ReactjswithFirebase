import React, {useEffect, useState} from 'react'
import AdminLayout from './AdminLayout'
import { addShop, getShops, updateShop, deleteShop } from './services/adminService'

export default function AdminShops(){
  const [shops, setShops] = useState([])
  const [form, setForm] = useState({name:'', address:'', categoryId:'', floorId:''})
  const [editingId, setEditingId] = useState(null)

  async function load(){ const s = await getShops(); setShops(s) }
  useEffect(()=>{ load() },[])

  async function submit(e){ e.preventDefault(); try{ if(editingId){ await updateShop(editingId, form) } else { await addShop(form) } setForm({name:'', address:'', categoryId:'', floorId:''}); setEditingId(null); await load(); alert('Saved') }catch(err){ alert(err.message) } }
  function startEdit(s){ setForm({name:s.name||'', address:s.address||'', categoryId:s.categoryId||'', floorId:s.floorId||''}); setEditingId(s.id) }
  async function remove(id){ if(!confirm('Delete shop?')) return; await deleteShop(id); load() }

  return (
    <AdminLayout>
      <div className="admin-panel">
        <div className="admin-form card">
          <h3>{editingId? 'Edit Shop' : 'Create Shop'}</h3>
          <form onSubmit={submit}>
            <label>Shop Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <label>Address</label>
            <textarea value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
            <label>Category ID</label>
            <input value={form.categoryId} onChange={e=>setForm({...form,categoryId:e.target.value})} placeholder="category doc id" />
            <label>Floor ID</label>
            <input value={form.floorId} onChange={e=>setForm({...form,floorId:e.target.value})} placeholder="floor doc id" />
            <div style={{marginTop:10}}>
              <button className="button" type="submit">Save</button>
              {editingId && <button type="button" onClick={()=>{ setEditingId(null); setForm({name:'',address:'',categoryId:'',floorId:''}) }} style={{marginLeft:8}}>Cancel</button>}
            </div>
          </form>
        </div>

        <div className="admin-list card">
          <h3>All Shops</h3>
          <div className="admin-table">
            {shops.length===0 && <div className="small">No shops</div>}
            {shops.map(s=> (
              <div key={s.id} className="admin-row">
                <div>
                  <div className="shop-name">{s.name}</div>
                  <div className="small">{s.address}</div>
                </div>
                <div className="admin-actions">
                  <button className="button" onClick={()=>startEdit(s)}>Edit</button>
                  <button className="button" style={{background:'#ff6b6b',marginLeft:8}} onClick={()=>remove(s.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
