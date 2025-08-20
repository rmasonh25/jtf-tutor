import React from 'react'
import { FaArrowRight, FaStar, FaClock, FaMusic } from 'react-icons/fa'

export default function TeacherCard({ teacher, onSelect, onView }){
  return (
    <div className="card p-6 group hover:scale-105 transition-all duration-300 animate-slide-up">
      <div className="flex items-start gap-4 mb-4">
        {teacher.photoUrl ? (
          <img 
            alt={teacher.name} 
            src={teacher.photoUrl} 
            width={80} 
            height={80} 
            className="rounded-xl object-cover w-20 h-20 group-hover:shadow-glow transition-shadow" 
          />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 flex items-center justify-center group-hover:shadow-glow transition-shadow">
            <FaMusic className="text-brand-600 dark:text-brand-400 text-2xl" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">{teacher.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              {String(teacher.instrument).toUpperCase()}
            </span>
            <div className="flex items-center gap-1 text-accent-600">
              <FaClock className="text-sm" />
              <span className="text-sm font-semibold">${teacher.pricePerHour}/hr</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="muted mb-4 leading-relaxed line-clamp-3">{teacher.bio}</p>
      
      <div className="flex gap-2">
        {onSelect && (
          <button 
            type="button"
            className="btn btn-primary flex-1 group/btn" 
            onClick={()=>onSelect(teacher)}
          >
            Select Teacher
            <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        )}
        {onView && (
          <button 
            type="button"
            className="btn btn-ghost flex-1 group/btn" 
            onClick={()=>onView(teacher)}
          >
            View Profile 
            <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  )
}
