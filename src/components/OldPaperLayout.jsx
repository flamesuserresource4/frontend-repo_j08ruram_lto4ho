import React from 'react'

function OldPaperLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f6f1e4] text-black">
      <div className="mx-auto max-w-5xl p-4 sm:p-6">
        <div className="bg-[#faf5e6] border-4 border-black shadow-[8px_8px_0_#000] p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default OldPaperLayout