import React from 'react'
import '../styles/Footer.css'
import links from '../utiles/links'
import { Link as LinkRouter } from 'react-router-dom'
import Facebook from './svgs/Facebook.jsx'
import Instagram from './svgs/Instagram.jsx'
import Github from './svgs/Github.jsx'

export default function Footer() {
  return (
    <>
      <footer className='relative py-3 flex flex-col items-center bg-black overflow-hidden'>
        <div className='relative z-[1] container m-auto px-6 md:px-12'>
          <div className='m-auto md:w-10/12 lg:w-8/12 xl:w-6/12'>
            <div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
                <div className='w-full space-x-12 flex justify-center text-lime-500 sm:w-7/12 md:justify-start'>
                    <ul className='list-disc list-inside self-center space-y-8 '>
                        {
                          links.map((link, index) => (<LinkRouter key={index} to={link.to} className='hover:text-sky-400 transition'> <li>{link.title}
                          </li></LinkRouter> ))
                        }  
                    </ul>
                    <ul role="list" className='space-y-8'>
                      <li>
                        <a href="#" className='flex items-center space-x-3 hover:text-sky-400 transition'>
                          <Github/>
                          <span>Github</span>
                        </a>
                      </li>
                      <li>
                          <a href="#" className='flex items-center space-x-3 hover:text-sky-400 transition'>
                            <Facebook/>
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className='flex items-center space-x-3 hover:text-sky-400 transition'>
                            <Instagram/>
                            <span>Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto'>
                        <span className='block text-sky-400'>Find your perfect trip, designed by insiders who know and love their cities!</span>
                        <span className='block text-sky-400'>Developed by Debi 🌈 &copy; 2023</span>
                    </div>
                  </div>
                </div>
            </div>
          </footer>
    </>
  )
}
