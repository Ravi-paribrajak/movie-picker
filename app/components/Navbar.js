// app/Navbar.js
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-0"> {/* RESPONSIVE CHANGE: padding on small screens */}
      <Link href={"/"}>
        <div className="mt-6 md:mt-12 flex items-center gap-2 md:gap-4">
          <img src="/popcorn.png" className="w-10 md:w-14" alt="popcorn" />
          {/* CHANGED: corrected gradient class name */}
          <h1 className="text-2xl md:text-4xl bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
            Movie Picker
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
