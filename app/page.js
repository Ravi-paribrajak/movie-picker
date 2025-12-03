"use client"
import Image from "next/image";
import Link from "next/link";
import { genres } from "./data/moviesData";
import { useState } from "react";

export default function Home() {

  const [selectedMovie, setselectedMovie] = useState()
  const [selectedGenre, setselectedGenre] = useState()

  // Logic: Function which Picks the Movie
  const handleMoviePick = (genre) => {
    
  }
  

  return (
    <div className="flex flex-col items-center">

      <div className="text-white mt-3 opacity-60">Can't decide? Let fate choose your film.</div>

      {/* Card */}
      <div className="bg-[#161F32] border border-white/10 h-[60vh] w-[50vw] mt-7 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)]    p-6">
        {/* Grid: 2 columns, 3 rows; rows split evenly with auto-rows */}
        <div className="grid grid-cols-2 grid-rows-3 auto-rows-[1fr] gap-x-6 gap-y-6 justify-center place-items-stretch h-full">
          {/* children fill their cell with h-full; control width with max-w so columns stay close */}
          <Link href="/movies"><div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div onClick={()=>{handleMoviePick("Action")}}>

              Action
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div></Link>

          <div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div>

              Comedy
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div>

          <div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div>

              Drama
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div>
          <div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div>

              Sci-Fi
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div>

          <div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div>

              Horror
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div>
          <div className="bg-[#334156] rounded-xl w-full max-w-[340px] h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] cursor-pointer hover:border hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
            <div>

              Mystery
            </div>
            <div className="absolute bottom-3 right-3  hidden group-hover:block">
              <img src="/clapperboard.png" className="w-7" alt="film" />
            </div>
          </div>

        </div>
        <div className="text-white mt-20 opacity-30 w-full text-center">Based on highly rated classics and modern hits.</div>
      </div>
    </div>
  );
}
