import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UnderConstruction from './UnderContruction.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { get_itinerary_by_id } from '../store/actions/itineraryActions.js';
import UserItinerary from "./UserItinerary.jsx";
import ItineraryPrice from './ItineraryPrice.jsx';





export default function ItineraryCity({ _id} ) {
  const itinerary = useSelector((store) => store.itineraryReducer.itinerary)
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_itinerary_by_id(_id)) 
        
    },[])
    return (
    <>
        <div className='flex justify-center'>
        <div className='min-h-[30vh] w-[60vw]'>
            <div className='min-h-[10vh] flex justify-center bg-teal-700 my-2 rounded-lg p-2'>
                <h2 className='text-3xl mt-3'>{itinerary?.name} </h2>
            </div>
            <div className='min-h-[15vh] flex justify-center bg-teal-700 my-2 rounded-lg p-2'> 
                <div className='w-[30vw] flex self-center flex-col ml-3' > <div className='text-lg'> Price :  
                    <ItineraryPrice price={itinerary?.price} />
                </div><div><h2 className='text-lg'>Duration: {itinerary?.duration} hours</h2> </div></div>
                <div className='w-[30vw] flex justify-center' > 
                <UserItinerary id={itinerary?.user} name= {itinerary?.user?.name} image = {itinerary?.user?.image}/>
                </div>
                <div className='w-[20vw] flex justify-center flex-col mr-3' > 
                    <div><h2 className='text-center text-lg'>{itinerary?.hashtags}</h2> </div>
                    <div className="btn"> 
                    {itinerary?.likes}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>      
                </div>
            </div>
            <div className='min-h-[15vh] bg-teal-700 my-2 rounded-lg p-2'>
                <div className="collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-2xl font-medium text-center">
                        Click here to see the comments
                        {/* <button>Button View More</button> */}
                    </div>
                    <div className="collapse-content"> 
                        <UnderConstruction/>
                         {/*{itinerary.activities}
                        {itinerary.comments}
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                                </div>
                            </div>
                            <div className="chat-header">Obi-Wan Kenobi</div>
                            <div className="chat-bubble chat-bubble-warning">It was said that you would, destroy the Sith, not join them.</div>
                            </div>
                            <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                                </div>
                            </div>
                            <div className="chat-header">Obi-Wan Kenobi</div>
                            <div className="chat-bubble chat-bubble-warning">It was you who would bring balance to the Force</div>
                            </div>
                            <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://ocdn.eu/pulscms-transforms/1/QiUk9kuTURBXy84NjNmNTZlZi03YjkxLTRjOGMtODRmNS0xYWY5YzYzOGE5MGYuanBlZ5GVAs0BVMzTw8PeAAGhMAE" />
                                </div>
                            </div>
                            <div className="chat-header">Obi-Wan Kenobi</div>
                            <div className="chat-bubble chat-bubble-warning">Not leave it in Darkness</div>
                            </div>
                            <button>View Less</button>*/}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
