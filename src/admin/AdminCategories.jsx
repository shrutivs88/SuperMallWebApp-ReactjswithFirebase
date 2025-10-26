import React, {useEffect, useState} from 'react'
import AdminLayout from './AdminLayout'
import { addCategory, getCategories, updateCategory, deleteCategory } from './services/adminService'

export default function AdminCategories(){
  const [cats, setCats] = useState([])
  const [form, setForm] = useState({name:'', description:''})
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{ load() },[])
  async function load(){ const c = await getCategories(); setCats(c) }

  async function submit(e){ e.preventDefault(); if(editingId) await updateCategory(editingId, form); else await addCategory(form); setForm({name:'',description:''}); setEditingId(null); load(); alert('Saved') }

  function startEdit(c){ setForm({name:c.name, description:c.description}); setEditingId(c.id) }
  async function remove(id){ if(!confirm('Delete category?')) return; await deleteCategory(id); load() }

  return (
    <AdminLayout>
      <div className="admin-panel">
        <div className="admin-form card">
          <h3>{editingId? 'Edit Category' : 'Create Category'}</h3>
          <form onSubmit={submit}>
            <label>Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <label>Description</label>
            <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
            <div style={{marginTop:10}}>
              <button className="button" type="submit">Save</button>
              {editingId && <button type="button" onClick={()=>{ setEditingId(null); setForm({name:'',description:''}) }} style={{marginLeft:8}}>Cancel</button>}
            </div>
          </form>
        </div>

        <div className="admin-list card">
          <h3>Categories</h3>
          {cats.map(c=> (
            <div key={c.id} className="admin-row">
              <div>
                <div style={{fontWeight:700}}>{c.name}</div>
                <div className="small">{c.description}</div>
              </div>
              <div className="admin-actions">
                <button className="button" onClick={()=>startEdit(c)}>Edit</button>
                <button className="button" style={{background:'#ff6b6b',marginLeft:8}} onClick={()=>remove(c.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
