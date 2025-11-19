import React from 'react'

const roles = {
  Alu: 'The Builder Mafia',
  Khandu: 'Doctor Primus',
  Auro: 'The Lavish Sheikh Realtor',
  MKV: 'The General — Entrepreneur',
}

function ProfileCard({ name, img, blurb }) {
  return (
    <article className="p-4 border border-black/70 bg-white shadow-[inset_0_0_0_2px_#000]">
      <div className="flex items-start gap-4">
        <img src={img} alt={`${name} portrait`} className="w-20 h-20 object-cover grayscale contrast-125 border border-black" />
        <div>
          <h3 className="font-serif text-2xl leading-tight text-black">{name}</h3>
          <p className="uppercase tracking-wide text-xs text-gray-700">{roles[name] || ''}</p>
          <p className="mt-2 text-sm leading-6 text-gray-900">{blurb}</p>
        </div>
      </div>
    </article>
  )
}

export default ProfileCard