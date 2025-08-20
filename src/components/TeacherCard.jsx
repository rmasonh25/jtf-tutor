import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function TeacherCard({ teacher, onSelect, onView }){
  return (
    <div className="card p-4 grid grid-cols-[96px_1fr] gap-4">
      {teacher.photoUrl
        ? <img alt={teacher.name} src={teacher.photoUrl} width={96} height={96} className="rounded-xl object-cover" />
        : <div className="w-24 h-24 rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-700 dark:border-slate-600" />
      }
      <div>
        <h3 className="text-lg font-semibold mb-1">{teacher.name}</h3>
        <div className="muted mb-2">{String(teacher.instrument).toUpperCase()} • ${teacher.pricePerHour}/hr</div>
        <p className="muted mb-3">{teacher.bio}</p>
        <div className="flex gap-2">
          {onSelect && <button className="btn" onClick={()=>onSelect(teacher)}>Select</button>}
          {onView && <button className="btn btn-ghost" onClick={()=>onView(teacher)}>View Profile <FaArrowRight className="ml-2"/></button>}
        </div>
      </div>
    </div>
  )
}
