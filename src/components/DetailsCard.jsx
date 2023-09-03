import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link as LinkRouter } from 'react-router-dom'
import ItineraryCity from './ItineraryCity.jsx';


export default function DetailsCard() {
  let{id} = useParams();
  
  const[cities, setCities]= useState();
  useEffect(()=>{
        axios.get(`http://localhost:3000/api/cities/${id}`)
        .then(response=>{setCities(response.data.city)})
        .catch(error=>{console.log(error)})
  },[]);
  return (
    <>
      <div className='bg-cover bg-center min-h-[95vh] text-white' style={{ backgroundImage: `url('${cities?.url}')` }}>
        <div className='backdrop-blur-sm py-12 min-h-[50vh] flex flex-col justify-center rounded-3xl'> 
        <h2 className='text-center text-4xl py-1 '>{cities?.city}</h2>
        <h3 className='text-center text-3xl py-1' >{cities?.country}</h3>
        <h4 className='text-center text-xl py-1'>Language:  {cities?.language}</h4>
        <h5 className='text-center text-lg py-1'>Currency:  {cities?.currency}</h5>
        <p className='px-4 md:px-52 text-center'>{cities?.description }</p>
          <div className='flex justify-end my-2 py-2'>
          <LinkRouter to='/cities' className='navbar-link text-black drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none flex self-end mr-14 border border-solid rounded-lg border-indigo-400 bg-cyan-300 px-3 py-2'> Go back </LinkRouter>
          <LinkRouter to='/' className='navbar-link text-black drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none flex self-end mr-14 border border-solid rounded-lg border-indigo-400 bg-cyan-300 px-3 py-2'> Go home </LinkRouter>
          </div>
        </div>
        <ItineraryCity/>
      </div>
    </>
  )
}
