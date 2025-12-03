// app/movies/page.js
"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { genres } from '../data/moviesData'  // Importing our data
import { useRouter, useSearchParams } from 'next/navigation'

const Movies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genereparam = searchParams.get("genre");

  const [movie, setMovie] = useState()

  useEffect(() => {
    if(genereparam && genres[genereparam]){
      pickRandomMovie();
    }
  }, [genereparam])
  
  const handleGoHome = () => {
    router.push('/')
  }

  const pickRandomMovie = () => {
    const moviesList = genres[genereparam];
    const randomIndex = Math.floor(Math.random() * moviesList.length);
    setMovie(moviesList[randomIndex]);
  }
  
  if(!movie) return <div className='text-white text-center mt-20'>Picking a movie...</div>

  return (
    <div className='text-white flex flex-col justify-center w-full items-center px-4 md:px-0'> {/* RESPONSIVE CHANGE: padding on small screens */}
      <div className='mt-7 text-base md:text-xl opacity-60'>Can't decide? Let fate choose your film.</div>

      <div className='bg-[#161F32] h-auto min-h-[60vh] w-full max-w-[900px] md:max-w-[700px] rounded-xl mt-3 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)] pb-8 p-4 md:p-6'>
        {/* Back Button */}
        <div className="flex items-center">
          <img src="/icons8-back-arrow-48.png" className="invert cursor-pointer w-10 md:w-12" onClick={() => { handleGoHome() }} alt="back-arrow" />
        </div>

        {/* Genre Badge */}
        <div className='flex justify-center items-center mt-2'>
          <h2 className='bg-[#2B2E32] rounded-2xl px-4 py-1 text-yellow-300 font-semibold border border-yellow-400/40 text-sm md:text-base '>{genereparam} PICK</h2>
        </div>

        {/* Movie Title */}
        <div className='flex justify-center mt-4 px-2'>
          <h2 className='text-2xl md:text-4xl font-bold text-center wrap-break-word'>{movie.title}</h2> {/* RESPONSIVE CHANGE: break-words so long titles wrap */}
        </div>

        {/* Meta Info Row */}
        <div className='flex flex-wrap justify-center items-center gap-3 mt-4 text-sm'>
          <span className='text-zinc-400 text-sm md:text-base'>{movie.year}</span>
          <span className='text-zinc-400 text-[10px]'>●</span>
          <span className='flex items-center gap-1 text-yellow-400 font-bold text-sm md:text-base'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            {movie.rating}
          </span>
        </div>

        {/* Description Box */}
        <div className='w-full flex justify-center mt-4 px-2'>
          <div className='bg-[#121B2D] w-full md:w-[85%] min-h-[120px] rounded-2xl border border-white/10 py-5 px-5 text-zinc-300 '>
            <p className='text-center italic text-sm md:text-lg leading-relaxed'>"{movie.description}"</p>
          </div>
        </div>

        {/* Action Buttons */}
        {/* RESPONSIVE CHANGE: column on small screens, row on md+ */}
        <div className='w-full flex flex-col md:flex-row sm:w-auto justify-center items-center gap-3 mt-6'>
          <div className='flex flex-col md:flex-row gap-3 items-center'>
            {/* Pick Another Button */}
            <button
              onClick={pickRandomMovie}
              className="flex items-center gap-2 bg-[#334156] p-3 px-6 font-bold rounded-xl cursor-pointer hover:bg-[#576477] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,165,0,0.7)] transition transform"
              aria-label="Pick another movie"
            >
              <img src="/icons8-refresh-30.png" alt="refreshicon" className='w-6 md:w-7' />
              <span>Pick Another</span>
            </button>

            {/* Watch Details Button */}
            <a 
              href={`https://www.google.com/search?q=${encodeURIComponent(movie.title + " movie")}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 p-3 px-6 font-bold rounded-xl cursor-pointer transition transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]"
              style={{ background: "linear-gradient(90deg,#FACC15,#FB923C)", color: "#000" }} // fallback gradient
            >
              <img src="/icons8-ticket-48.png" alt="ticket" className='w-6 md:w-7' />
              <span>Watch Details</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies
