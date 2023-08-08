import React from 'react'
import '../styles/HeroCallToAction.css'

export default function HeroCallToAction() {
  return (
    <>
    <div className='w-100 h-96 bg-heroBg bg-cover flex items-center'>
      <div className="grid justify-center  mx-auto w-3/5 h-4/6 mb-4 pb-2 border-double border border-teal-500 rounded-2xl bg-cyan-900 ">
        <h2 className='flex justify-center items-end tracking-widest drop-shadow-darkShadow text-lime-500 text-3xl mb-2'>MyTinerary</h2>
        <h3 className='text-cyan-400 text-center font-mono mb-1'>Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <a className='bg-blue-100 py-3 mx-5 text-sm shadow-sm font-medium tracking-wider text-blue-600 rounded-full hover:shadow-2xl hover:bg-blue-200 text-center flex self-center justify-center items-center cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-8 h-8 animate-pulse '><path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" /></svg>Visit our destinations! <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-8 h-8 animate-pulse '><path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" /></svg></a>
      </div>
    </div>
    </>
  )
}
