import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
const offers = collection(db,'offers')

export async function listActiveOffers(){
  const s = await getDocs(offers); return s.docs.map(d=>({id:d.id,...d.data()}))
}
