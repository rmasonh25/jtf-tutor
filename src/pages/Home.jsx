import React from 'react'
import { Link } from 'react-router-dom'
import { FaMusic, FaUsers, FaCalendarAlt, FaStar, FaArrowRight } from 'react-icons/fa'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="hero-wrap">
          <div className="animate-fade-in">
            <h1 className="hero-title">Jacqueline Taylor & Friends</h1>
            <p className="hero-sub">Private lessons & professional ensembles for weddings and events.</p>
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary group">
                Book a Lesson
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/weddings" className="btn btn-secondary group">
                Hire an Ensemble
                <FaMusic className="ml-2 group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/teachers" className="btn btn-ghost group">
                Browse Teachers
                <FaUsers className="ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 space-y-8">
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Why study with us?</h2>
          <p className="text-lg muted max-w-2xl mx-auto">Conservatory-trained musicians, flexible schedules, and curated repertoire—from auditions to aisle walks.</p>
        </div>
        
        <div className="grid-3 mt-12">
          <div className="card p-8 group hover:scale-105 transition-all duration-300 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <FaStar className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pros Only</h3>
            <p className="muted leading-relaxed">Experienced performers with real stages under their belt. Learn from musicians who've performed at prestigious venues.</p>
          </div>
          
          <div className="card p-8 group hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <FaCalendarAlt className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible</h3>
            <p className="muted leading-relaxed">Pick times that work for you; online or in-studio options available. We adapt to your schedule.</p>
          </div>
          
          <div className="card p-8 group hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <FaMusic className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Events</h3>
            <p className="muted leading-relaxed">Duo to quartet packages; special requests welcome. Perfect for weddings, corporate events, and celebrations.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-50 to-accent-50 dark:from-slate-800 dark:to-slate-700 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to start your musical journey?</h2>
            <p className="text-lg muted max-w-2xl mx-auto">Join hundreds of students who've discovered their passion for music with us.</p>
          </div>
          <div className="flex justify-center">
            <Link to="/teachers" className="btn btn-primary text-lg px-8 py-4">
              Meet Our Teachers
              <FaArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
