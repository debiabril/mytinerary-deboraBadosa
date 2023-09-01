import React from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'


export default function BtnAvatar() {
  const photo = useSelector(store => store.userReducer.photo )
  return (
    <>
      <LinkRouter to='/signin' className='flex rounded-full border-white border-1 m-1 bg-cyan-300 hover:bg-cyan-800 p-2 text-white drop-shadow-darkShadow hover:drop-shadow-lightShadow '> 
        <p className='hidden md:flex drop-shadow-darkShadow'>Login</p>
        <img className="w-7 h-7 fill-black stroke-cyan-500 ml-2 mr-1 rounded-3xl" src={photo} alt="" /> 
      </LinkRouter>
    </>
  )
}
