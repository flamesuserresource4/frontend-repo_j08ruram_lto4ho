import React from 'react'

function OldPaperLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f0e6] text-black">
      <div
        className="mx-auto max-w-6xl p-3 sm:p-6"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)',
        }}
      >
        <div className="bg-[#fbf7ee] border border-black/80 shadow-[0_0_0_1px_#000_inset] p-4 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default OldPaperLayout
