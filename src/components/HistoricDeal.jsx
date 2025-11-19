import React from 'react'

function HistoricDeal() {
  return (
    <section className="mt-8 border-t-2 border-black pt-6">
      <h2 className="font-serif text-3xl text-black mb-4">Historic Deal Signed — Abu Dhabi It Is</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-gray-900 leading-7">
            After exactly twelve exhausting years of diplomatic shoulder taps, delayed Zooms, and
            mysterious calendar invites titled “TBD?”, the council of bachelors finally inked the deal:
            Abu Dhabi, 16th to 21st December 2025. Yes, it’s fixed. We checked twice. Then asked again.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-900 leading-7">
            <li>Singapore &amp; Vietnam politely escorted off the itinerary, no hard feelings.</li>
            <li>Lazy MKV yet to book — currently philosophizing about airline mileage.</li>
            <li>MKV fuzzing about not taking a flight via Hyderabad, but stunned as the plan still moves.</li>
            <li>Auro, after a dramatic session of premium tears, bravely carved out time before his pre-honeymoon.</li>
            <li>Heavenly sources confirm weather will be a cool, smug 25°C — gods demand sunscreen, not excuses.</li>
            <li>Actual planning still pending, which promises to be the most entertaining chaos of the decade.</li>
            <li>Limits on bachelors yet to be decided — intentionally left mysterious to keep the legends alive.</li>
          </ul>
        </div>
        <aside className="bg-gray-50 border border-black p-4">
          <h3 className="font-serif text-xl text-black">Trip Box</h3>
          <dl className="mt-2 text-sm">
            <dt className="uppercase tracking-wide text-gray-700">Dates</dt>
            <dd className="mb-2 text-gray-900">16–21 Dec 2025</dd>
            <dt className="uppercase tracking-wide text-gray-700">Destination</dt>
            <dd className="mb-2 text-gray-900">Abu Dhabi</dd>
            <dt className="uppercase tracking-wide text-gray-700">Status</dt>
            <dd className="mb-2 text-gray-900">Historic • Finally Fixed</dd>
            <dt className="uppercase tracking-wide text-gray-700">Casualties</dt>
            <dd className="mb-2 text-gray-900">Singapore, Vietnam</dd>
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default HistoricDeal