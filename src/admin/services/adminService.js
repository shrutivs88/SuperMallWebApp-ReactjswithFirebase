import { db } from '../../firebase'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const shopsCol = collection(db,'shops')
const offersCol = collection(db,'offers')
const catsCol = collection(db,'categories')
const floorsCol = collection(db,'floors')

export async function addShop(data){ return addDoc(shopsCol, {...data, createdAt: new Date()}) }
export async function getShops(){ const s = await getDocs(shopsCol); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function updateShop(id,data){ return updateDoc(doc(db,'shops',id), data) }
export async function deleteShop(id){ return deleteDoc(doc(db,'shops',id)) }

export async function addOffer(data){ return addDoc(offersCol, {...data, createdAt: new Date()}) }
export async function getOffers(){ const s = await getDocs(offersCol); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function updateOffer(id,data){ return updateDoc(doc(db,'offers',id), data) }
export async function deleteOffer(id){ return deleteDoc(doc(db,'offers',id)) }

export async function addCategory(data){ return addDoc(catsCol, {...data, createdAt: new Date()}) }
export async function getCategories(){ const s = await getDocs(catsCol); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function updateCategory(id,data){ return updateDoc(doc(db,'categories',id), data) }
export async function deleteCategory(id){ return deleteDoc(doc(db,'categories',id)) }

export async function addFloor(data){ return addDoc(floorsCol, {...data, createdAt: new Date()}) }
export async function getFloors(){ const s = await getDocs(floorsCol); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function updateFloor(id,data){ return updateDoc(doc(db,'floors',id), data) }
export async function deleteFloor(id){ return deleteDoc(doc(db,'floors',id)) }
