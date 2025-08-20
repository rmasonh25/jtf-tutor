import React from 'react'
import { Link } from 'react-router-dom'

export default function Success(){
  return (
    <div className="container py-16 text-center space-y-3">
      <h2 className="text-3xl font-bold">Thank you!</h2>
      <p className="muted">Your booking has been recorded (demo). We’ll email confirmation shortly.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  )
}
