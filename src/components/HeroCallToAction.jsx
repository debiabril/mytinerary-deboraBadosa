import React from 'react'
import '../styles/HeroCallToAction.css'

export default function HeroCallToAction() {
  return (
    <>
    <div className='bg-heroBg bg-cover bg-center  w-100 h-96 flex items-center'>
      <div className="grid justify-center  mx-auto w-3/5 h-3/6 mb-4 pb-4 border-double border border-teal-500 rounded-2xl bg-cyan-900 ">
        <h2 className='flex justify-center items-end text-lime-500 '>MyTinerary</h2>
        <h3 className='text-cyan-400 text-center'>Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <button className='bg-blue-100 px-3 py-2 mx-4 text-sm shadow-sm font-medium tracking-wider  text-blue-600 rounded-full hover:shadow-2xl hover:bg-blue-200'>Visit our destinations!</button>
      </div>
    </div>
    </>
  )
}
