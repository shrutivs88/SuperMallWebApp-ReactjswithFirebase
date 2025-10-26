import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
const cats = collection(db,'categories')
export async function getCategories(){ const s = await getDocs(cats); return s.docs.map(d=>({id:d.id,...d.data()})) }
