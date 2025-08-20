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
    <header className="sticky top-0 z-20 glass border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container flex items-center gap-4 py-4">
        <Link to="/" className="font-bold tracking-tight flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
            <FaMusic className="text-white text-lg" />
          </div>
          <span className="text-xl gradient-text">JTF Music</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          <Link to="/teachers" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive('/teachers') 
              ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}>
            Teachers
          </Link>
          <Link to="/book" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive('/book') 
              ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}>
            Book
          </Link>
          <Link to="/weddings" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            isActive('/weddings') 
              ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}>
            Weddings
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center gap-3">
          <button 
            type="button"
            onClick={()=>setDark(!dark)} 
            className="btn btn-ghost rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" 
            title="Toggle theme"
          >
            {dark ? (
              <div className="flex items-center gap-2">
                <FaSun className="text-accent-500" />
                <span className="hidden sm:inline">Light</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaMoon className="text-brand-500" />
                <span className="hidden sm:inline">Dark</span>
              </div>
            )}
          </button>
          
          <Link to="/checkout" className="btn btn-ghost rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 relative" title="Checkout">
            <FaShoppingCart className="text-brand-500" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                {items.length}
              </span>
            )}
            <span className="ml-2 hidden sm:inline">{items.length} items</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
