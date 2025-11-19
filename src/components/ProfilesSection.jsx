import React from 'react'
import ProfileCard from './ProfileCard'

const people = [
  {
    name: 'Alu',
    img: 'https://images.unsplash.com/photo-1545147986-a9d6f2b9b4a1?q=80&w=200&auto=format&fit=crop',
    blurb:
      'Architect by day, cement whisperer by night. Known to negotiate with rebar and win. Rumor has it even bulldozers wait for his green signal.',
  },
  {
    name: 'Khandu',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=200&auto=format&fit=crop',
    blurb:
      'First of his name, healer of ailments, prescriber of “just chill.” Keeps a stethoscope for vibes and a scalpel for plans that need surgery.',
  },
  {
    name: 'Auro',
    img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=200&auto=format&fit=crop',
    blurb:
      'Luxury realtor who sells sunsets with parking. After an operatic cry, emerged stronger, richer, and—shockingly—available before pre-honeymoon.',
  },
  {
    name: 'MKV',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop',
    blurb:
      'General of startups, commander of calendar snoozes. Still negotiating with the concept of booking. Hyderabad is not a layover; it’s a feeling.',
  },
]

function ProfilesSection() {
  return (
    <section className="mt-4">
      <h2 className="font-serif text-3xl text-black mb-4">Profiles of the Distinguished Rogues</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {people.map((p) => (
          <ProfileCard key={p.name} name={p.name} img={p.img} blurb={p.blurb} />
        ))}
      </div>
    </section>
  )
}

export default ProfilesSection