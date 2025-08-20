import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { BookingProvider } from './context/BookingContext.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
