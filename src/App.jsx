import React from 'react'
import OldPaperLayout from './components/OldPaperLayout'
import NewspaperHeader from './components/NewspaperHeader'
import ProfilesSection from './components/ProfilesSection'
import HistoricDeal from './components/HistoricDeal'

function App() {
  return (
    <OldPaperLayout>
      <NewspaperHeader />

      {/* Hero kicker */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl text-black">Front Page: Legends Confirm Movement</h2>
          <p className="mt-2 text-gray-900 leading-7">
            Reports confirm that after a dozen trips around the sun and exactly thrice that many in the
            group chat, an expedition has been sanctioned. Our correspondents bring tongue-in-cheek coverage
            from the war rooms, the crying rooms, and the airport that must not be named (Hyderabad). All
            developments printed with maximum sarcasm and minimum responsibility.
          </p>
        </div>
        <div className="bg-gray-50 border border-black p-4">
          <h3 className="font-serif text-xl text-black">Weather by Divine Department</h3>
          <p className="text-gray-900 leading-7">
            The gods, after reviewing the itinerary, have promised Abu Dhabi will sit politely at 25°C.
            In return, they request fewer last-minute plan changes and at least one decent sunscreen.
          </p>
        </div>
      </div>

      <HistoricDeal />
      <ProfilesSection />

      {/* Footer blurb */}
      <footer className="mt-10 pt-6 border-t-2 border-black">
        <p className="text-center text-xs text-gray-700">
          Printing errors guaranteed. Limits on bachelors pending high-level committee decision. Subscribe for more chaos.
        </p>
      </footer>
    </OldPaperLayout>
  )
}

export default App