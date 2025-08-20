import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="hero-wrap">
          <h1 className="hero-title">Jacqueline Taylor & Friends</h1>
          <p className="hero-sub">Private lessons & professional ensembles for weddings and events.</p>
          <div className="hero-actions">
            <Link to="/book" className="btn btn-primary">Book a Lesson</Link>
            <Link to="/weddings" className="btn">Hire an Ensemble</Link>
            <Link to="/teachers" className="btn btn-ghost">Browse Teachers</Link>
          </div>
        </div>
      </section>

      <section className="container py-10 space-y-4">
        <h2 className="text-2xl font-semibold">Why study with us?</h2>
        <p className="muted">Conservatory-trained musicians, flexible schedules, and curated repertoire—from auditions to aisle walks.</p>
        <div className="grid-3 mt-4">
          <div className="card p-4"><h3 className="font-semibold">Pros Only</h3><p className="muted">Experienced performers with real stages under their belt.</p></div>
          <div className="card p-4"><h3 className="font-semibold">Flexible</h3><p className="muted">Pick times that work; online or in-studio options.</p></div>
          <div className="card p-4"><h3 className="font-semibold">Events</h3><p className="muted">Duo to quartet packages; special requests welcome.</p></div>
        </div>
      </section>
    </>
  )
}
