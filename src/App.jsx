import React from 'react'
import OldPaperLayout from './components/OldPaperLayout'
import NewspaperHeader from './components/NewspaperHeader'
import ProfilesSection from './components/ProfilesSection'
import HistoricDeal from './components/HistoricDeal'

function App() {
  return (
    <OldPaperLayout>
      <NewspaperHeader />

      {/* Banner rule */}
      <div className="border-t-8 border-black mb-6" />

      {/* Lead story + sidebar like a broadsheet */}
      <div className="grid lg:grid-cols-12 gap-6">
        <article className="lg:col-span-8">
          <p className="uppercase tracking-[0.25em] text-xs text-gray-800">Lead — Group Affairs</p>
          <h2 className="mt-1 text-4xl lg:text-5xl leading-tight font-serif" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            Sanction At Last; Council of Four Fixes Passage To Abu Dhabi
          </h2>
          <p className="mt-3 text-gray-900 leading-8 text-[17px]">
            After a dozen winters of wavering, the celebrated company of bachelors resolved, by mixed acclamation
            and sigh, to undertake a passage to Abu Dhabi. Telegrams indicate Hyderabad factions remain displeased;
            divine weather clerks, however, promise a temperate 25°C.
          </p>
          <p className="mt-3 text-gray-900 leading-8 text-[17px]">
            Singapore and Vietnam were courteously retired from contention. MKV, being yet unacquainted with the
            act of booking, delays the issuance of his ticket; Auro, having shed noble tears, secures leave before
            pre‑honeymoon. Further arrangements lie in committee.
          </p>
        </article>

        <aside className="lg:col-span-4 bg-[#fffdf7] border border-black p-4 shadow-[inset_0_0_0_1px_#000]">
          <h3 className="text-2xl font-serif" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Meteorological Notes</h3>
          <ul className="mt-2 text-sm leading-6 list-[square] pl-5">
            <li>Abu Dhabi: Fine; 25°C decreed by gods.</li>
            <li>Hyderabad: Overcast with objections.</li>
            <li>Travel Sunscreens: Scarce but recommended.</li>
          </ul>
        </aside>
      </div>

      {/* Thin rules like newspapers */}
      <div className="my-6 border-t border-black/60" />

      <HistoricDeal />

      <div className="my-6 border-t border-black/60" />

      <ProfilesSection />

      {/* Footer like tiny agate type */}
      <footer className="mt-10 pt-4 border-t-2 border-black">
        <p className="text-center text-[11px] text-gray-800">
          Notices & Miscellany: Printing errors assured. The question of limits on bachelors remains before the Board.
        </p>
      </footer>
    </OldPaperLayout>
  )
}

export default App
