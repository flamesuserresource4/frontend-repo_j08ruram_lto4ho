import React from 'react'
import ProfileCard from './ProfileCard'

const people = [
  {
    name: 'Alu',
    img: 'https://images.unsplash.com/photo-1545147986-a9d6f2b9b4a1?q=80&w=200&auto=format&fit=crop',
    blurb:
      'Builder of empires, whisperer to concrete. Contracts sign themselves when he raises an eyebrow.',
  },
  {
    name: 'Khandu',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=200&auto=format&fit=crop',
    blurb:
      'Physician extraordinary. Writes prescriptions for patience and the occasional itinerary surgery.',
  },
  {
    name: 'Auro',
    img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=200&auto=format&fit=crop',
    blurb:
      'Realtor of splendours. Having shed valourous tears, contrived leisure before pre‑honeymoon.',
  },
  {
    name: 'MKV',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop',
    blurb:
      'General and entrepreneur. Stands firm against the tyranny of premature bookings.',
  },
]

function ProfilesSection() {
  return (
    <section className="mt-6">
      <h2 className="text-3xl font-serif mb-2" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Persons of the Week</h2>
      <p className="text-sm uppercase tracking-[0.2em] text-gray-700">Society & Appointments</p>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {people.map((p) => (
          <ProfileCard key={p.name} name={p.name} img={p.img} blurb={p.blurb} />)
        )}
      </div>
    </section>
  )
}

export default ProfilesSection
