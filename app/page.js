"use client"
import React from "react";
import Link from "next/link";

export default function Home() {
  // We don't need useState or handler functions here anymore.
  // We just use Link params to pass data to the next page.

  const genreList = ["Action", "Comedy", "Drama", "Sci_Fi", "Horror", "Mystery"];

  return (
    <div className="flex flex-col items-center">
      <div className="text-white mt-3 opacity-60">Can't decide? Let fate choose your film.</div>

      {/* Card */}
      <div className="bg-[#161F32] borderHvQw border-white/10 h-[60vh] w-[50vw] mt-7 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] p-6">
        
        <div className="grid grid-cols-2 grid-rows-3 auto-rows-[1fr] gap-x-6 gap-y-6 justify-center place-items-stretch h-full">
          
          {/* We map over the genres to create buttons automatically */}
          {genreList.map((genre) => (
            <Link 
              key={genre} 
              href={`/movies?genre=${genre}`} // <--- THIS IS THE MAGIC PART
              className="w-full h-full"
            >
              <div className="bg-[#334156] rounded-xl w-full h-full flex items-center justify-center text-white/90 text-2xl font-bold border border-white/10 shadow-lg cursor-pointer hover:border-yellow-300 transition transform duration-200 ease-out hover:scale-105 relative group">
                <div>{genre}</div>
                <div className="absolute bottom-3 right-3 hidden group-hover:block">
                  <img src="/clapperboard.png" className="w-7" alt="film" />
                </div>
              </div>
            </Link>
          ))}

        </div>
        <div className="text-white mt-20 opacity-30 w-full text-center">
          Based on highly rated classics and modern hits.
        </div>
      </div>
    </div>
  );
}