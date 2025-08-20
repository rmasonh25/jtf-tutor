import React, { createContext, useContext, useMemo, useState } from 'react'
const Ctx = createContext(null)
export function BookingProvider({ children }){
  const [items, setItems] = useState([])
  const total = useMemo(()=> items.reduce((a,b)=> a + (b.rate||0), 0), [items])
  const value = { items, total, addItem:(i)=>setItems(p=>[...p,i]), removeIndex:(i)=>setItems(p=>p.filter((_,idx)=>idx!==i)), clear:()=>setItems([]) }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useBooking(){ const v = useContext(Ctx); if(!v) throw new Error('useBooking must be inside BookingProvider'); return v }
