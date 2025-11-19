import React, { useEffect } from 'react'

function NewspaperHeader() {
  useEffect(() => {
    document.title = 'The Bachelor Khandu Times'
  }, [])

  return (
    <header className="border-b-4 border-black pb-3 mb-6">
      <div className="grid grid-cols-3 items-end">
        <div className="text-left hidden sm:block">
          <p className="uppercase tracking-[0.2em] text-[10px]">Price Two Paisa</p>
          <p className="uppercase tracking-[0.2em] text-[10px] -mt-1">Founded 2013</p>
        </div>
        <div className="text-center col-span-3 sm:col-span-1">
          <h1 className="text-5xl sm:text-7xl leading-none font-black tracking-tight" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            The Bachelor Khandu Times
          </h1>
          <p className="text-xs uppercase tracking-[0.35em] mt-2">Morning Edition</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="uppercase tracking-[0.2em] text-[10px]">Vol. XII — No. 1</p>
          <p className="uppercase tracking-[0.2em] text-[10px] -mt-1">Printed Irregularly</p>
        </div>
      </div>
      <p className="text-center italic text-sm mt-2">All the tidings unfit for WhatsApp</p>
    </header>
  )
}

export default NewspaperHeader
