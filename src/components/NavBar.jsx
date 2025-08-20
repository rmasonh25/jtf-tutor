import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'
import { useDarkMode } from '../context/DarkModeContext.jsx'
import { FaShoppingCart, FaMusic, FaMoon, FaSun } from 'react-icons/fa'

export default function NavBar(){
  const { items } = useBooking()
  const { dark, setDark } = useDarkMode()
  const loc = useLocation()
  const isActive = (path) => loc.pathname === path || loc.pathname.startsWith(path + '/')

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="container flex items-center gap-3 py-3">
        <Link to="/" className="font-bold tracking-tight flex items-center gap-2">
          <FaMusic className="text-brand-500" /> JTF Music
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/teachers" className={`px-3 py-1 rounded-full text-sm ${isActive('/teachers') ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>Teachers</Link>
          <Link to="/book" className={`px-3 py-1 rounded-full text-sm ${isActive('/book') ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>Book</Link>
          <Link to="/weddings" className={`px-3 py-1 rounded-full text-sm ${isActive('/weddings') ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>Weddings</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={()=>setDark(!dark)} className="btn btn-ghost" title="Toggle theme">
            {dark ? <><FaSun className="mr-2" /> Light</> : <><FaMoon className="mr-2" /> Dark</>}
          </button>
          <Link to="/checkout" className="btn btn-ghost" title="Checkout">
            <FaShoppingCart className="mr-2" /> {items.length}
          </Link>
        </div>
      </div>
    </header>
  )
}
