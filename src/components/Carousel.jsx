import React, { useState, useEffect } from 'react'
import '../styles/Carousel.css'

const Carousel = () => {
  let [index, setIndex] = useState(0);
  const cities = [{
      title: 'City1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg',
      city: 'London',
      country: 'England'
  },
  {
      title: 'City2',
      url: 'https://media.gq.com.mx/photos/635c136db430aa98c0db8aee/16:9/w_2560%2Cc_limit/ciudad%2520de%2520panama-1204869339.jpg',
      city: 'Panama',
      country: 'Panama'
  },
  {
    title: 'City3',
    url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/20/a5/f9.jpg',
    city: 'Mendoza',
    country: 'Argentina'
  },
  {
    title: 'City4',
    url: 'https://blog.japanwondertravel.com/wp-content/uploads/2022/03/manuel-velasquez-ssfp9okORYs-unsplash.jpg',
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    title: 'City5',
    url: 'https://www.bbva.com/wp-content/uploads/2016/10/Wangjing-BBVA-1024x683.jpg',
    city: 'Pekin',
    country: 'China'
  },
  {
    title: 'City6',
    url: 'https://img2.rtve.es/v/868498/square/?h=400',
    city: 'Barcelona',
    country: 'Spain'
  },
  {
    title: 'City7',
    url: 'https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_2560%2Cc_limit/The%2520Best%2520Places%2520for%2520Female%2520Solo%2520Travelers_Amsterdam_GettyImages-923546342.jpg',
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    title: 'City8',
    url: 'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
    city: 'Rome',
    country: 'Italy'
  },
  {
    title: 'City9',
    url: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg',
    city: 'Rio de Janeiro',
    country: 'Brazil'
  },
  {
    title: 'City10',
    url: 'https://images.ecestaticos.com/Eha5BQExbrkOVLCYYSOibX40YRQ=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F036%2Fcf6%2F706%2F036cf6706198f8ac3e0fbeb0a759e020.jpg',
    city: 'Copenhagen',
    country: 'Denmark'
  },
  {
    title: 'City11',
    url: 'https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg',
    city: 'Istanbul',
    country: 'Turkey'
  },
  {
    title: 'City12',
    url: 'https://cafedelasciudades.com.ar/wp-content/uploads/2022/12/Guia-turistica-de-Sidney.jpg',
    city: 'Sydney',
    country: 'Australia'
  },
  ]
  const handlePrev = () => {
    index>0? setIndex(index - 4) : setIndex(8);
  }

  const handleNext = () => {
    index<8 ? setIndex(index + 4) : setIndex(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < 8) {
        setIndex(index + 4)
      } else {
        setIndex(0)
      }

    }, 4000)
    return () => {
      clearInterval(timer)
    }
  }, [index]) 

  return (
    <>
      <div className='bg-cyan-800 text-center flex justify-center'>
      <h2  className='text-center  text-lime-400 text-bold text-3xl tracking-widest drop-shadow-darkShadow mb-2 w-3/4 md:w-full'>Popular MYTINERARIES</h2>
      </div>
      <div className='bg-cyan-600 flex justify-center min-h-[60vh] max-w-full'>
        <button className="btn btn-circle mt-[30vh] mr-2 text-indigo-600 bg-indigo-100 hover:bg-teal-600 hover:text-teal-100" onClick={handlePrev}>❮</button>
        <div className=' h-[70vh] w-5/6 grid  sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-3 mt-2'>
          {[0, 1, 2, 3].map((i) => (
            <a key={i} className='block group relative rounded-xl border-purple-400 border-2 border-double bg-black '>
              <img
                className='absolute rounded-xl inset-0 object-cover object-center h-full w-full'
                src={cities[index + i].url}
              />
              <div className='relative p-4 sm:p-6 lg:p-8 bg-black bg-opacity-50 rounded-xl rounded-b-none'>
                <p className='md:text-2xl text-center drop-shadow-darkShadow font-bold uppercase  tracking-widest text-lime-400'>
                  {cities[index + i].city}
                </p>
                <p className="text-lg text-center drop-shadow-darkShadow font-bold tracking-widest  text-cyan-400 md:text-2xl">
                  {cities[index + i].country}
                </p>
              </div>
            </a>
          ))}
        </div>
        <button className="btn btn-circle mt-[30vh] ml-2 text-indigo-600 bg-indigo-100 hover:bg-teal-600 hover:text-teal-100 " onClick={handleNext}>❯</button>
      </div>
    </>
  )
}
export default Carousel