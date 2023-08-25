import React from 'react'
import Location from './svgs/Location.jsx'

export function Cards({city, country, url}) {
 
    return(
        <>
            <div className='block group relative rounded-xl cursor-pointer border-purple-400 border-2 border-double bg-black h-[25vh] w-[80vw] sm:w-[45vw] md:w-[30vw] xl:w-[20vw]'>
                <img
                    className='absolute rounded-xl inset-0 object-cover object-center h-full w-full'
                    src={url}
                />
                <div className='relative px-4 py-1 sm:px-6 lg:px-8 bg-black bg-opacity-50 rounded-xl rounded-b-none'>
                    <p className='md:text-2xl drop-shadow-darkShadow font-bold uppercase tracking-widest text-lime-400'>
                    {city}
                    </p>
                    <div className='flex items-center'>
                    <Location/>
                    <p className="text-lg pl-1 drop-shadow-darkShadow font-bold tracking-widest  text-cyan-400 md:text-2xl">
                    {country}
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}