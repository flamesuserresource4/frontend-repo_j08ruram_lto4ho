import React, { useEffect } from 'react'

function NewspaperHeader() {
  useEffect(() => {
    document.title = 'The Bachelor Khandu Times'
  }, [])

  return (
    <header className="border-b-4 border-black pb-4 mb-6">
      <div className="text-center">
        <p className="tracking-widest text-xs uppercase text-gray-700">Vol. 12 • No. 1 • Est. 2013 — At Long Last, Some Commitment</p>
        <h1 className="font-serif text-5xl sm:text-7xl mt-2 leading-none text-black">The Bachelor Khandu Times</h1>
        <p className="mt-2 text-sm text-gray-700 italic">All the news that makes the group chat dangerous</p>
      </div>
    </header>
  )
}

export default NewspaperHeader