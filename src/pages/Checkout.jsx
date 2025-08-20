import React from 'react'
import { useBooking } from '../context/BookingContext.jsx'
import { Link, useNavigate } from 'react-router-dom'

export default function Checkout(){
  const { items, removeIndex, total, clear } = useBooking()
  const nav = useNavigate()
  const handlePay = () => { clear(); nav('/success') }
  return (
    <div className="container py-8 space-y-4">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      {items.length === 0 ? (
        <p>No items yet. <Link to="/book" className="text-brand-600 underline">Book a lesson</Link> or <Link to="/weddings" className="text-brand-600 underline">pick an ensemble</Link>.</p>
      ) : (
        <>
          <ul className="grid gap-3">
            {items.map((it, i) => (
              <li key={i} className="card p-4 space-y-1">
                <div className="font-semibold">{it.type === 'lesson' ? 'Lesson' : 'Ensemble'} — {it.teacher.name}</div>
                <div className="muted">{new Date(it.startISO).toLocaleString()} → {new Date(it.endISO).toLocaleTimeString()}</div>
                <div>${(it.rate || 0).toFixed(2)}</div>
                {it.notes && <div className="mt-1">Notes: {it.notes}</div>}
                <button className="btn mt-2" onClick={() => removeIndex(i)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <button className="btn btn-primary" onClick={handlePay}>Pay (demo)</button>
        </>
      )}
    </div>
  )
}
