import React from 'react'
import BtnAvatar from './BtnAvatar'
import { Link as LinkRouter } from 'react-router-dom'
import links from '../utiles/links'
import '../styles/Header.css'


export default function Header() {
  return (
    <>
      <header className='flex justify-between h-12 items-center px-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <nav className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="w-6 h-6 fill-black stroke-white">
            <path d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
          </svg>
          <h1 id='titleNavbar' className='font-bold text-white tracking-widest drop-shadow-darkShadow '>MYTINERARY</h1>
        </nav>
        {
          links.map((link, index) => (<LinkRouter key={index} to={link.to} className='navbar-link text-white drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none'> {link.title}
          </LinkRouter> ))
        }        
        <BtnAvatar/>
      </header>
    </>
  )
}
