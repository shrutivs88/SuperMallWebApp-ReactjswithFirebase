import { db } from '../firebase'
import { collection, addDoc, getDocs, doc, getDoc, query, where } from 'firebase/firestore'

const shops = collection(db,'shops')

export async function addShop(data){ return addDoc(shops,data) }
export async function getShops(){ const s = await getDocs(shops); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function getShopById(id){ const d = await getDoc(doc(db,'shops',id)); return d.exists()?{id:d.id,...d.data()}:null }
export async function getShopsByFloor(floorId){ const q = query(shops, where('floorId','==', floorId)); const s = await getDocs(q); return s.docs.map(d=>({id:d.id,...d.data()})) }
export async function getProductsByShop(shopId){ const p = collection(db,'products'); const q = query(p, where('shopId','==', shopId)); const snap = await getDocs(q); return snap.docs.map(d=>({id:d.id,...d.data()})) }


// import { db } from "../firebase";
// import { ref, set, get, child, remove, query, orderByChild, equalTo } from "firebase/database";

// const SHOP_REF = 'shops';


// export async function addShop(data){
// // generate id via push key
// const k = Date.now().toString();
// await set(ref(db, `${SHOP_REF}/${k}`), data);
// return k;
// }

// export async function getShops(){
//     const snap = await get(ref(db, SHOP_REF));
//     return snap.exists() ? snap.val() : {};
//     }
    
    
//     export async function getShopById(id){
//     const snap = await get(ref(db, `${SHOP_REF}/${id}`));
//     return snap.exists() ? snap.val() : null;
//     }

//     export async function deleteShop(id){
//         return remove(ref(db, `${SHOP_REF}/${id}`));
//         }
        
        
        // export async function getShopsByFloor(floor){
        // const snap = await get(ref(db, SHOP_REF));
        // if(!snap.exists()) return {};
        // const all = snap.val();
        // const res = Object.fromEntries(Object.entries(all).filter(([k,v])=> v.floor === floor));
        // return res;
        // }



// const SHOP_REF = "shops/";

// export const addShop = async (id, data) => {
//   return set(ref(db, SHOP_REF + id), data);
// };

// export const getShops = async () => {
//   const snapshot = await get(child(ref(db), SHOP_REF));
//   return snapshot.exists() ? snapshot.val() : {};
// };

// export const deleteShop = async (id) => {
//   return remove(ref(db, SHOP_REF + id));
// };
