import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom'
import ItineraryCity from './ItineraryCity.jsx';
import { get_city_by_id } from '../store/actions/cityActions.js';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound.jsx';


export default function DetailsCard() {
  let{id} = useParams();
  const city = useSelector((store) => store.cityReducer.city)
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_city_by_id(id)) 
    },[])
  return (
    <>
      <div className='bg-cover bg-center min-h-[95vh] text-white' style={{ backgroundImage: `url('${city?.url}')` }}>
        <div className='backdrop-blur-sm py-12 min-h-[50vh] flex flex-col justify-center rounded-3xl'> 
        <h2 className='text-center text-4xl py-1 '>{city?.city}</h2>
        <h3 className='text-center text-3xl py-1' >{city?.country}</h3>
        <h4 className='text-center text-xl py-1'>Language:  {city?.language}</h4>
        <h5 className='text-center text-lg py-1'>Currency:  {city?.currency}</h5>
        <p className='px-4 md:px-52 text-center'>{city?.description }</p>
        
          <div className='flex justify-end my-2 py-2'>
          <LinkRouter to='/cities' className='navbar-link text-black drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none flex self-end mr-14 border border-solid rounded-lg border-indigo-400 bg-cyan-300 px-3 py-2'> Go back </LinkRouter>
          <LinkRouter to='/' className='navbar-link text-black drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none flex self-end mr-14 border border-solid rounded-lg border-indigo-400 bg-cyan-300 px-3 py-2'> Go home </LinkRouter>
          </div>
          {
            city.itineraries?.length > 0
            ? city.itineraries?.map((itinerary) => (
                <ItineraryCity key={itinerary._id} _id={itinerary._id} /* name={itinerary.name} duration={itinerary.duration} price={itinerary.price} likes={itinerary.likes} hashtags={itinerary.hashtags}  userName={itinerary.user.name} imageUser={itinerary.user.image}  */ /*activities={itinerary.activities}  comments={itinerary.comments} */ />     
            ))
            : <NotFound/>
          }
        </div>
      </div>
    </>
  )
}
