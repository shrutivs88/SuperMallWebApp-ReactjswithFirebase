import React, {useEffect, useState} from 'react'
import AdminLayout from './AdminLayout'
import { addOffer, getOffers, updateOffer, deleteOffer } from './services/adminService'

export default function AdminOffers(){
  const [offers, setOffers] = useState([])
  const [form, setForm] = useState({title:'', description:'', shopId:'', productIds:[], discountType:'percent', discountValue:0, startAt:'', endAt:''})
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{ load() },[])
  async function load(){ const o = await getOffers(); setOffers(o) }

  async function submit(e){ e.preventDefault(); if(editingId) await updateOffer(editingId, form); else await addOffer(form); setForm({title:'',description:'',shopId:'',productIds:[],discountType:'percent',discountValue:0,startAt:'',endAt:''}); setEditingId(null); load(); alert('Saved') }

  function startEdit(o){ setForm({...o, startAt: o.startAt ? o.startAt.split('T')[0] : '', endAt: o.endAt ? o.endAt.split('T')[0] : ''}); setEditingId(o.id) }
  async function remove(id){ if(!confirm('Delete offer?')) return; await deleteOffer(id); load() }

  return (
    <AdminLayout>
      <div className="admin-panel">
        <div className="admin-form card">
          <h3>{editingId? 'Edit Offer' : 'Create Offer'}</h3>
          <form onSubmit={submit}>
            <label>Title</label>
            <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
            <label>Description</label>
            <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
            <label>Shop ID</label>
            <input value={form.shopId} onChange={e=>setForm({...form,shopId:e.target.value})} />
            <label>Product IDs (comma separated)</label>
            <input value={(form.productIds||[]).join(',')} onChange={e=>setForm({...form,productIds: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})} />
            <label>Discount Type</label>
            <select value={form.discountType} onChange={e=>setForm({...form,discountType:e.target.value})}>
              <option value="percent">Percent</option>
              <option value="fixed">Fixed</option>
            </select>
            <label>Discount Value</label>
            <input type="number" value={form.discountValue} onChange={e=>setForm({...form,discountValue: Number(e.target.value)})} />
            <label>Start Date</label>
            <input type="date" value={form.startAt} onChange={e=>setForm({...form,startAt:e.target.value})} />
            <label>End Date</label>
            <input type="date" value={form.endAt} onChange={e=>setForm({...form,endAt:e.target.value})} />
            <div style={{marginTop:10}}>
              <button className="button" type="submit">Save Offer</button>
              {editingId && <button type="button" onClick={()=>{ setEditingId(null); setForm({title:'', description:'', shopId:'', productIds:[], discountType:'percent', discountValue:0, startAt:'', endAt:''}) }} style={{marginLeft:8}}>Cancel</button>}
            </div>
          </form>
        </div>

        <div className="admin-list card">
          <h3>Offers</h3>
          {offers.length===0 && <div className="small">No offers</div>}
          {offers.map(o=> (
            <div key={o.id} className="admin-row">
              <div>
                <div style={{fontWeight:700}}>{o.title}</div>
                <div className="small">{o.description}</div>
              </div>
              <div className="admin-actions">
                <button className="button" onClick={()=>startEdit(o)}>Edit</button>
                <button className="button" style={{background:'#ff6b6b',marginLeft:8}} onClick={()=>remove(o.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
