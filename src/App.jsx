import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Teachers from './pages/Teachers.jsx'
import TeacherProfile from './pages/TeacherProfile.jsx'
import BookLesson from './pages/BookLesson.jsx'
import Weddings from './pages/Weddings.jsx'
import Checkout from './pages/Checkout.jsx'
import Success from './pages/Success.jsx'
import NavBar from './components/NavBar.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<TeacherProfile />} />
          <Route path="/book" element={<BookLesson />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-700 py-6">
        <div className="container text-center text-sm muted">© {new Date().getFullYear()} JTF Music</div>
      </footer>
    </div>
  )
}
