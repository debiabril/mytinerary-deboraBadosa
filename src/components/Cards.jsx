import React from 'react'
export function Cards({city, country, url}) {
 
    return(
        <>
            <div className='block group relative rounded-xl cursor-pointer border-purple-400 border-2 border-double bg-black h-[25vh] w-[20vw]'>
                <img
                    className='absolute rounded-xl inset-0 object-cover object-center h-full w-full'
                    src={url}
                />
                <div className='relative p-4 sm:p-6 lg:p-8 bg-black bg-opacity-50 rounded-xl rounded-b-none'>
                    <p className='md:text-2xl drop-shadow-darkShadow font-bold uppercase tracking-widest text-lime-400'>
                    {city}
                    </p>
                    <div className='flex items-center'>
                    <svg className="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <p className="text-lg pl-1 drop-shadow-darkShadow font-bold tracking-widest  text-cyan-400 md:text-2xl">
                    {country}
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}