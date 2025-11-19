import React from 'react'

const roles = {
  Alu: 'The Builder Mafia',
  Khandu: 'Doctor Primus',
  Auro: 'Lavish Sheikh Realtor',
  MKV: 'General — Entrepreneur',
}

function ProfileCard({ name, img, blurb }) {
  return (
    <article className="p-4 border border-black bg-white shadow-[inset_0_0_0_1px_#000]">
      <div className="flex items-start gap-4">
        <img
          src={img}
          alt={`${name} portrait`}
          className="w-20 h-24 object-cover grayscale contrast-125 border border-black"
        />
        <div>
          <h3 className="text-2xl leading-tight" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>{name}</h3>
          <p className="uppercase tracking-[0.2em] text-[11px] text-gray-700">{roles[name] || ''}</p>
          <p className="mt-2 text-sm leading-6 text-gray-900">{blurb}</p>
        </div>
      </div>
    </article>
  )
}

export default ProfileCard
