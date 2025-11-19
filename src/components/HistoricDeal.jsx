import React from 'react'

function HistoricDeal() {
  return (
    <section className="mt-6">
      <header className="mb-3">
        <p className="uppercase tracking-[0.25em] text-xs text-gray-800">Foreign Correspondence</p>
        <h2 className="font-serif text-4xl leading-tight" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
          Historic Deal Ratified After Twelve Years' Delay
        </h2>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-700">Abu Dhabi • 16–21 December 2025</p>
        <p className="mt-1 text-[15px] text-gray-900 italic">
          Singapore and Vietnam Withdraw; Hyderabad Objects; Weather Office Affirms a Temperate Twenty‑Five.
        </p>
      </header>

      <div className="md:columns-2 gap-8 [column-fill:_balance]"><p className="break-inside-avoid text-[17px] leading-8 text-gray-900 first-letter:text-6xl first-letter:float-left first-letter:leading-[0.8] first-letter:pr-2 first-letter:font-semibold">
          The compact, long discussed and oft postponed, is at length concluded: Abu Dhabi is named the place of
          rendezvous for the company of four. The period is fixed for the six days between the sixteenth and the
          twenty‑first of December, in the Year Two Thousand and Twenty‑Five.
        </p>
        <p className="break-inside-avoid text-[17px] leading-8 text-gray-900 mt-3">
          It is reported that Singapore and Vietnam, once formidable candidates, retired with civility. The General,
          known as MKV, is observed to linger at the threshold of the booking office, meditating upon mileage and
          other modern contrivances. The Realtor, styled Auro, having performed a scene of honest tears, secured
          precedential leave before his pre‑honeymoon.
        </p>
        <p className="break-inside-avoid text-[17px] leading-8 text-gray-900 mt-3">
          Telegrams from the Hyderabad desk record a measure of discontent respecting transits and connexions; yet the
          enterprise proceeds. From the clerks of the heavens we have assurance of a steady twenty‑five degrees, for
          which the public is advised to provide creams against the sun.
        </p>
        <ul className="break-inside-avoid list-disc pl-6 mt-3 text-[16px] leading-8 text-gray-900">
          <li>Arrangements: Remitted to committee; details to be communicated in due course.</li>
          <li>Bachelors: Number under consideration; resolution expected at a later sitting.</li>
        </ul>
      </div>

      <aside className="mt-4 border-t border-b border-black/60 py-3">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <dt className="uppercase tracking-[0.2em] text-gray-700">Dates</dt>
            <dd className="text-gray-900">16–21 Dec 2025</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-gray-700">Destination</dt>
            <dd className="text-gray-900">Abu Dhabi</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-gray-700">Status</dt>
            <dd className="text-gray-900">Ratified</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-gray-700">Withdrawn</dt>
            <dd className="text-gray-900">Singapore, Vietnam</dd>
          </div>
        </dl>
      </aside>
    </section>
  )
}

export default HistoricDeal
