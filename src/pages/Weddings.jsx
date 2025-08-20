import React, { useState } from 'react'
import { ensembles } from '../mock/db.js'
import { useBooking } from '../context/BookingContext.jsx'

export default function Weddings(){
  const { addItem } = useBooking()
  const [notes, setNotes] = useState('')
  return (
    <div className="container py-8 space-y-4">
      <h2 className="text-2xl font-semibold">Wedding & Event Ensembles</h2>
      <div className="grid gap-4">
        {ensembles.map(pkg => (
          <div key={pkg.id} className="card p-4 space-y-2">
            <h3 className="font-semibold">{pkg.name}</h3>
            <p className="muted">{pkg.description}</p>
            <div className="muted">Duration: {pkg.durationMins} mins</div>
            <div className="muted">Base Rate: ${pkg.baseRate}</div>
            {pkg.addOns && (
              <details className="mt-2">
                <summary className="cursor-pointer">Add-ons</summary>
                <ul className="list-disc pl-6">
                  {pkg.addOns.map(a => <li key={a.id}>{a.name} (+${a.price})</li>)}
                </ul>
              </details>
            )}
            <button className="btn" onClick={()=>{
              addItem({
                teacher: { id:'ensemble', name:pkg.name, instrument:'cello', bio:pkg.description, pricePerHour:pkg.baseRate, styles:['wedding repertoire'] },
                startISO: new Date().toISOString(),
                endISO: new Date(Date.now()+pkg.durationMins*60*1000).toISOString(),
                rate: pkg.baseRate, type:'ensemble', notes
              })
              alert('Ensemble package added to checkout.')
            }}>Add Package</button>
            <div>
              <label className="text-sm muted">Notes / Special Requests</label>
              <textarea className="input mt-1" value={notes} onChange={e=>setNotes(e.target.value)} rows={3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
