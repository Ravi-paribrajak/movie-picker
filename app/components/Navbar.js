import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href={"/"}><div className="mt-12 flex items-center gap-3">
        <img src="/popcorn.png" className="w-14" alt="popcorn" />
        {/* FIX: bg-gradient-to-r */}
        <h1 className="text-5xl bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
          Movie Picker
        </h1>
      </div></Link>
    </div>
  )
}

export default Navbar
