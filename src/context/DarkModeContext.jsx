import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext(null)

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const pref = localStorage.getItem('theme-dark')
    if (pref === 'true') setDark(true)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme-dark', 'true')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme-dark', 'false')
    }
  }, [dark])

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext)
  if (!ctx) throw new Error('useDarkMode must be used within DarkModeProvider')
  return ctx
}
