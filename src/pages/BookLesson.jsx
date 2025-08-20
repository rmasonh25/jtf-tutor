import React, { useMemo, useState } from 'react'
import { teachers, lessonSlots } from '../mock/db.js'
import TeacherCard from '../components/TeacherCard.jsx'
import LessonCalendar from '../components/LessonCalendar.jsx'
import { useBooking } from '../context/BookingContext.jsx'

export default function BookLesson(){
  const [teacher, setTeacher] = useState(null)
  const [date, setDate] = useState(null)
  const { addItem } = useBooking()

  const slots = useMemo(()=> lessonSlots.filter(s => !teacher || s.teacherId===teacher.id), [teacher])

  const handleAdd = () => {
    if(!teacher || !date) return
    const end = new Date(date.getTime()+3600*1000)
    addItem({ teacher, startISO: date.toISOString(), endISO: end.toISOString(), rate: teacher.pricePerHour, type:'lesson' })
    alert('Lesson added to checkout.')
  }

  return (
    <div className="container py-8 space-y-4">
      <h2 className="text-2xl font-semibold">Book a Lesson</h2>
      <section className="space-y-3">
        <h3 className="font-semibold">Choose a Teacher</h3>
        <div className="grid-3">
          {teachers.map(t => <TeacherCard key={t.id} teacher={t} onSelect={setTeacher} onView={()=>{}} />)}
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="font-semibold">Pick a Time</h3>
        <LessonCalendar slots={slots} selected={date} onChange={setDate} />
      </section>
      <button className="btn btn-primary" disabled={!teacher || !date} onClick={handleAdd}>Add to Checkout</button>
    </div>
  )
}
