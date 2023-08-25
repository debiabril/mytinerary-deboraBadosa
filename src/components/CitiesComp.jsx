import { Link as LinkRouter }  from 'react-router-dom'
import {Cards} from './Cards.jsx'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import NotFound from './NotFound.jsx';
import Search from './svgs/search.jsx';



export default function CitiesComp() {
    const[cities, setCities]= useState();
    let inputSearch = useRef();
    useEffect(()=>{
        axios.get('http://localhost:3000/api/cities')
        .then(response=>{setCities(response.data.cities)})
        .catch(error=>{console.log(error)})
    },[]);
    const handleInputSearch = async() =>{
        const city = inputSearch.current.value
        try{
            const res = await axios.get(`http://localhost:3000/api/cities?city=${city}`)
            setCities(res.data.cities)
        }catch (error){
            if(error.response.status === 404){
                console.log("We didn't find any city with that name");
                setCities([])
            }else{
                console.log(error)
            }
        }
    }
    
    return(
    <>
        <div className='bg-cyan-900 flex flex-col pb-5'>
            <div className='flex justify-center my-1 '>
            <input ref={inputSearch} type="text" className='rounded-md text-center justify-center w-1/3 h-8 bg-indigo-100 self-center my-3' placeholder='Search a city...'/>
            <button onClick={handleInputSearch} className='border rounded-lg border-lime-500  mx-1 my-2 bg-teal-800 hover:bg-teal-600 hover:border-lime-400'>
                <Search/>
            </button>
            </div>
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