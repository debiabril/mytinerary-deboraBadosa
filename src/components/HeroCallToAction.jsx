import React from 'react'
import '../styles/HeroCallToAction.css'

export default function HeroCallToAction() {
  return (
    <>
    <div className='w-100 h-96 flex items-center'>
      <div className="grid justify-center  mx-auto w-3/5 h-4/6 mb-4 pb-2 border-double border border-teal-500 rounded-2xl bg-cyan-900 ">
        <h2 className='flex justify-center items-end tracking-widest drop-shadow-darkShadow text-lime-500 text-3xl mb-2'>MyTinerary</h2>
        <h3 className='text-cyan-400 text-center font-mono mb-1'>Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <a className='bg-blue-100 px-3 py-4 mx-5 text-sm shadow-sm font-medium tracking-wider text-blue-600 rounded-full hover:shadow-2xl hover:bg-blue-200 text-center flex self-center justify-center'>Visit our destinations!</a>
      </div>
    </div>
    </>
  )
}
