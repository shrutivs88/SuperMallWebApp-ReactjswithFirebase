import React, {useEffect, useState} from 'react'
import AdminLayout from './AdminLayout'
import { addFloor, getFloors, updateFloor, deleteFloor } from './services/adminService'

export default function AdminFloors(){
  const [floors, setFloors] = useState([])
  const [form, setForm] = useState({name:'', level:1, description:''})
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{ load() },[])
  async function load(){ const f = await getFloors(); setFloors(f) }

  async function submit(e){ e.preventDefault(); if(editingId) await updateFloor(editingId, form); else await addFloor(form); setForm({name:'',level:1,description:''}); setEditingId(null); load(); alert('Saved') }

  function startEdit(f){ setForm({name:f.name, level:f.level, description:f.description}); setEditingId(f.id) }
  async function remove(id){ if(!confirm('Delete floor?')) return; await deleteFloor(id); load() }

  return (
    <AdminLayout>
      <div className="admin-panel">
        <div className="admin-form card">
          <h3>{editingId? 'Edit Floor' : 'Create Floor'}</h3>
          <form onSubmit={submit}>
            <label>Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <label>Level (number)</label>
            <input type="number" value={form.level} onChange={e=>setForm({...form,level: Number(e.target.value)})} />
            <label>Description</label>
            <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
            <div style={{marginTop:10}}>
              <button className="button" type="submit">Save</button>
              {editingId && <button type="button" onClick={()=>{ setEditingId(null); setForm({name:'',level:1,description:''}) }} style={{marginLeft:8}}>Cancel</button>}
            </div>
          </form>
        </div>

        <div className="admin-list card">
          <h3>Floors</h3>
          {floors.map(f=> (
            <div key={f.id} className="admin-row">
              <div>
                <div style={{fontWeight:700}}>{f.name} (Level {f.level})</div>
                <div className="small">{f.description}</div>
              </div>
              <div className="admin-actions">
                <button className="button" onClick={()=>startEdit(f)}>Edit</button>
                <button className="button" style={{background:'#ff6b6b',marginLeft:8}} onClick={()=>remove(f.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
