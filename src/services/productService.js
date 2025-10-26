import { db } from '../firebase'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

const products = collection(db,'products')

export async function compareProducts(ids){
  const result = []
  for(const id of ids){
    const d = await getDoc(doc(db,'products',id))
    if(d.exists()) result.push({id:d.id,...d.data()})
  }
  return result
}




// import { db } from '../firebase';
// import { get } from 'firebase/database';


// export async function compareProducts(ids){
// // fetch products by id and return array
// const products = [];

// for(const id of ids){
// const snap = await get(ref(db, `products/${id}`));
// if(snap.exists()) products.push({id, ...snap.val()});
//     }
// return products;
// }