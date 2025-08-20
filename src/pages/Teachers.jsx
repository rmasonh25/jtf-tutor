import React from 'react'
import { useNavigate } from 'react-router-dom'
import { teachers } from '../mock/db.js'
import TeacherCard from '../components/TeacherCard.jsx'
import { FaMusic, FaUsers, FaStar } from 'react-icons/fa'

export default function Teachers(){
  const nav = useNavigate()
  return (
    <>
      <section className="hero">
        <div className="hero-wrap">
          <div className="animate-fade-in">
            <h1 className="hero-title">Our Teachers</h1>
            <p className="hero-sub">Meet our exceptional roster of professional musicians and educators.</p>
            <div className="flex justify-center items-center gap-8 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <FaUsers className="text-brand-500" />
                <span className="muted">{teachers.length} Professional Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-accent-500" />
                <span className="muted">Conservatory Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMusic className="text-brand-500" />
                <span className="muted">Multiple Instruments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid-3">
          {teachers.map((teacher, index) => (
            <div key={teacher.id} style={{animationDelay: `${index * 0.1}s`}}>
              <TeacherCard 
                teacher={teacher} 
                onView={(tt)=>nav(`/teachers/${tt.id}`)} 
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
