import React from 'react'
import { useNavigate } from 'react-router-dom'
import { teachers } from '../mock/db.js'
import TeacherCard from '../components/TeacherCard.jsx'

export default function Teachers(){
  const nav = useNavigate()
  return (
    <div className="container py-8 space-y-4">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Teachers</h2>
        <p className="muted">Browse our roster of professional musicians.</p>
      </div>
      <div className="grid-3">
        {teachers.map(t => <TeacherCard key={t.id} teacher={t} onView={(tt)=>nav(`/teachers/${tt.id}`)} />)}
      </div>
    </div>
  )
}
