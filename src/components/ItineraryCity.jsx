import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function ItineraryCity() {
    let{id} = useParams();
    const[cities, setCities]= useState();
    useEffect(()=>{
          axios.get(`http://localhost:3000/api/cities/${id}`)
          .then(response=>{setCities(response.data.city)})
          .catch(error=>{console.log(error)})
    },[]);
    return (
    <>
    <div className='flex justify-center'>
        <div className='min-h-[30vh] w-[60vw]'>
            <div className='min-h-[10vh] flex justify-center bg-teal-700 my-2 rounded-lg p-2'>
                <h2>Name of the Itinerary</h2>
            </div>
            <div className='min-h-[15vh] flex justify-center bg-teal-700 my-2 rounded-lg p-2'>
                <div className='w-[30vw]' > <h2> Price Duration </h2> </div>
                <div className='w-[30vw]' > <h2> User and Photo </h2></div>
                <div className='w-[30vw]' > <h2>Likes y Hashtags</h2> </div>
            </div>
            <div className='min-h-[15vh] bg-teal-700 my-2 rounded-lg p-2'>
                <button>Button View More</button>
                <div className='m-4'>
                    <div className="chat chat-start ">
                        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                        </div>
                        <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                        </div>
                        <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
                        </div>
                        <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                        </div>
                        <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                        </div>
                        <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                        </div>
                        <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                    </div>
                    <button> button View Less</button>
                </div> 
            </div>
        </div>
    </div>
    </>
  )
}
