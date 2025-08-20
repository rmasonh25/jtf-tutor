import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { teachers } from '../mock/db.js'

export default function TeacherProfile(){
  const { id } = useParams()
  const teacher = teachers.find(t => t.id===id)
  if(!teacher) return <div className="container py-8"><p className="muted">Teacher not found.</p></div>

  return (
    <div className="container py-8 space-y-4">
      <div className="card p-4 flex items-center gap-4">
        {teacher.photoUrl && <img alt={teacher.name} src={teacher.photoUrl} width={120} height={120} className="rounded-xl object-cover" />}
        <div>
          <h2 className="text-2xl font-semibold">{teacher.name}</h2>
          <div className="muted">{String(teacher.instrument).toUpperCase()} • ${teacher.pricePerHour}/hr • {teacher.styles?.join(', ')}</div>
        </div>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2">About</h3>
        <p className="muted">{teacher.bio}</p>
      </div>
      <div className="card p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Ready to book?</h3>
          <p className="muted">Check availability and add a lesson to your checkout.</p>
        </div>
        <Link to="/book" className="btn btn-primary">Check Availability</Link>
      </div>
    </div>
  )
}
