import { Link as LinkRouter }  from 'react-router-dom'
import {Cards} from './Cards.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NotFound from './NotFound.jsx';



export default function CitiesComp() {
    const[cities, setCities]= useState();
    useEffect(()=>{
        axios.get('http://localhost:3000/api/cities')
        .then(response=>{setCities(response.data.cities)})
        .catch(error=>{console.log(error)})
    },[]);
    const handleInputChange = async(city) =>{
        console.log(city.target.value)

        try{
            await axios.get(`http://localhost:3000/api/cities?city=${city.target.value}`)
            .then((res)=>setCities(res.data.cities)) 
        }catch (error){
            console.log(error)
            setCities([]);
        }
    }
    
    return(
    <>
        <div className='bg-cyan-900 flex flex-col pb-5'>
            <input onChange={handleInputChange} type="text" className='rounded-md text-center justify-center w-1/3 h-8 self-center my-3' placeholder='Search a city...'/>
            <div className=' flex flex-wrap justify-center items-center gap-4'>
            {
                cities?.length > 0 ? 
                cities?.map((city)=>{
                    return(
                        <LinkRouter key={city._id} to={`/cities/${city._id}`}>
                            <Cards city={city.city} country={city.country} url={city.url} />
                        </LinkRouter>
                    )
                })
                :
                <NotFound/>
            }
            </div>
        </div>
    </>
)}