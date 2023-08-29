import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export default function BtnAvatar() {
  return (
    <>
      <LinkRouter to='/signin' className='flex rounded-full border-white border-1 bg-cyan-300 hover:bg-cyan-800 p-2 text-white drop-shadow-darkShadow hover:drop-shadow-lightShadow '> 
        <p className='hidden md:flex drop-shadow-darkShadow'>Login</p> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-black stroke-cyan-500 md:ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
      </LinkRouter>
    </>
  )
}
