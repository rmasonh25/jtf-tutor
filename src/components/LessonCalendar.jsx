import React, { useMemo } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function LessonCalendar({ slots, selected, onChange }){
  const availableDates = useMemo(()=>{
    const days = new Set(slots.map(s => new Date(s.startISO).toDateString()))
    return (date) => days.has(date.toDateString())
  }, [slots])
  return (
    <div className="card p-4">
      <DatePicker
        selected={selected}
        onChange={onChange}
        filterDate={availableDates}
        showTimeSelect
        timeIntervals={60}
        className="input"
        dateFormat="MMM d, yyyy h:mm aa"
        placeholderText="Pick a time"
      />
    </div>
  )
}
