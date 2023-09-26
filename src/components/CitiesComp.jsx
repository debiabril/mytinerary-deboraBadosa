import { Link as LinkRouter }  from 'react-router-dom'
import {Cards} from './Cards.jsx'
import { useEffect, useRef } from 'react'
import NotFound from './NotFound.jsx';
import Refresh from './svgs/Refresh.jsx';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/cityActions.js';
import Search from './svgs/search.jsx';


export default function CitiesComp() {
    const cities = useSelector((store) => store.cityReducer.cities)
    let inputSearch = useRef();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_cities()) 
    },[]);
    const handleInputSearch = () =>{
        dispatch(filter_cities({
            city: inputSearch.current.value
        }))  
    }
    const navigate = useNavigate(0)
    const refreshPage = () => {
        navigate(0);
    }

    return(
    <>
        <div className='bg-cyan-900 flex flex-col pb-5'>
            <div className='flex justify-center my-1 '>
            <input ref={inputSearch} type="text" className='rounded-md text-center justify-center w-1/3 h-8 bg-indigo-100 self-center my-3' placeholder='Search a city...'/>
            <button onClick={handleInputSearch} className='border rounded-lg border-lime-500  mx-1 my-2 bg-teal-100 hover:bg-teal-600 hover:border-lime-400'>
                <Search/>
            </button>
            <button onClick={refreshPage} className='border mx-1 my-2 rounded-lg border-lime-500  bg-teal-100 h-10 w-10 hover:bg-teal-600 hover:border-lime-400'>
                <Refresh/>
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