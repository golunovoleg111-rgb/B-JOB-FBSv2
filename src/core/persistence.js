const STORAGE_PREFIX='bjob-v2:'
export const storage={get(key,fallback=null){try{const x=localStorage.getItem(STORAGE_PREFIX+key);return x?JSON.parse(x):fallback}catch{return fallback}},set(key,value){localStorage.setItem(STORAGE_PREFIX+key,JSON.stringify(value))},remove(key){localStorage.removeItem(STORAGE_PREFIX+key)}}
export const persistence={name:'local-demo',isShared:false,async get(key,fallback){return storage.get(key,fallback)},async set(key,value){storage.set(key,value)},async remove(key){storage.remove(key)}}
// Production adapter contract: replace persistence methods with a shared backend without changing domain/UI code.
