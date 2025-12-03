"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { genres } from '../data/moviesData'  // Importing our data
import { useRouter, useSearchParams } from 'next/navigation'


const movies = () => {

 
  const router = useRouter();
  const searchParams = useSearchParams();
  const genereparam = searchParams.get("genre");  // Read Action, Comedy etc... from URL

  const [movie, setMovie] = useState()

  // Will Run when page will reload
  useEffect(() => {
    if(genereparam && genres[genereparam]){
      pickRandomMovie();
    }
  }, [genereparam])
  

  const handleGoHome = () => {
    router.push('/') // Will push to Home Page
  }
  // Will pick Random movies
  const pickRandomMovie = () => {

    // 1. Get List of movies for this Genre
    const moviesList = genres[genereparam];

    // 2. Pick Random index
    const randomIndex = Math.floor(Math.random() * moviesList.length);

    // 3. set State
    setMovie(moviesList[randomIndex]);

  }
  
  // If no Movies is loaded yet, show simple loading state:
  if(!movie) return <div className='text-white text-center mt-20'>Picking a movie...</div>

  return (
    <div className='text-white flex flex-col justify-center w-full items-center'>
      <div className='mt-7 text-xl opacity-60'>
        Can't decide? Let fate choose your film.
      </div>

      
      <div className='bg-[#161F32] h-[60vh] w-[50vw] rounded-xl mt-3 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.03)]  '>

        {/* Back Button */}
        <img src="/icons8-back-arrow-48.png" className="invert cursor-pointer w-12" onClick={() => { handleGoHome() }} alt="back-arrow" />

        {/* Genre Badge */}
        <div className='flex justify-center items-center'>
          <h2 className='bg-[#2B2E32] rounded-2xl px-4 py-1 text-yellow-300 font-semibold border border-yellow-400/40 '>{genereparam} PICK</h2>
        </div>
        {/* Movie Title */}
        <div className='flex justify-center mt-4'>
          <h2 className='text-4xl font-bold'>{movie.title}</h2>
        </div>
        {/* Meta Info Row */}
        <div className='flex justify-center items-center gap-3 mt-4 text-sm'>
          {/* Year - Grey Color */}
          <span className='text-zinc-400 text-lg'>{movie.year}</span>

          {/* Small Dot Separator */}
          <span className='text-zinc-400 text-[10px]'>●</span>

          {/* Rating - Yellow Star & Text */}
          <span className='flex items-center gap-1 text-yellow-400 font-bold text-lg'>
            {/* SVG Star to match the reference style exactly */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            {movie.rating}
          </span>
        </div>
        {/* Description Box */}
        <div className='w-full flex justify-center mt-4'>
          <div className='bg-[#121B2D] w-[38vw] h-[18vh] rounded-2xl border border-white/10 py-5 px-5 text-zinc-300 '>
            <p className='text-center italic text-lg'>"{movie.description}"</p>
          </div>
        </div>
        {/* Action Buttons */}
        <div className='w-full flex justify-center items-center mt-9'>
          <div className='buttons flex gap-7'>
            {/* Pick Another Button */}
            <div className="btn1 flex bg-[#334156] p-3 px-8 gap-2 font-bold rounded-xl cursor-pointer hover:bg-[#576477]hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,165,0,0.7)]" onClick={pickRandomMovie}>
              <span><img src="/icons8-refresh-30.png" alt="refreshicon" className='w-7' /></span>
              <button className='cursor-pointer'>Pick Another</button>
            </div>
            {/* Watch Details Button */}
            <a 
              href={`https://www.google.com/search?q=${movie.title} movie`} 
              target="_blank" 
              rel="noreferrer"
              className="flex bg-linear-to-r from-yellow-400 to-orange-500 text-black p-3 px-6 gap-2 font-bold rounded-xl cursor-pointer duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] items-center"
            >
              <img src="/icons8-ticket-48.png" alt="ticket" className='w-6' />
              <span>Watch Details</span>
            </a>
          </div>

        </div>



      </div>
    </div>
  )
}

export default movies
