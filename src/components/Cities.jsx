import {Link} from 'react-router-dom'
import {Card} from './Cards.js'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Cities() {
    const[cities, setCities]= useState();
    useEffect(()=>{
        axios.get('http://localhost:3000/cities?city=')
        .then(response=>{setCities(response.data.cities)})
        .catch(error=>{console.log(error)})
    },[]);
    const handleInputChange = async(city) =>{
        console.log(city.target.value)

        try{
            const response = await axios.get(`http://localhost:3000/cities?city=${city.target.value}`)
            setCities(response.data.city)
        }catch (error){
            console.log(error)
        }
    }
    
    return(
    <>
        <div>
            <input onChange={handleInputChange} type="text" />
            <h2>Cities</h2>
            {
                cities?.map((city)=>{
                    return(
                        <Link key={city._id} to={`/cities/${city._id}`}>
                            <Card city={city.city} country={city.country} url={city.url} />
                        </Link>
                    )
                })
            }
        </div>
    </>
)}