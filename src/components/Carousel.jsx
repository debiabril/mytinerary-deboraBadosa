import React, { useState } from 'react'

const Carousel = () => {
  let [index, setIndex] = useState(0);
  const images = [{
      title: 'City1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg',
      city: 'Londres',
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
    country: 'Japon'
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
    country: 'España'
  },
  {
    title: 'City7',
    url: 'https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_2560%2Cc_limit/The%2520Best%2520Places%2520for%2520Female%2520Solo%2520Travelers_Amsterdam_GettyImages-923546342.jpg',
    city: 'Ámsterdam',
    country: 'Paises bajos'
  },
  {
    title: 'City8',
    url: 'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
    city: 'Roma',
    country: 'Italia'
  },
  {
    title: 'City9',
    url: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg',
    city: 'Río de Janeiro',
    country: 'Brasil'
  },
  {
    title: 'City10',
    url: 'https://images.ecestaticos.com/Eha5BQExbrkOVLCYYSOibX40YRQ=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F036%2Fcf6%2F706%2F036cf6706198f8ac3e0fbeb0a759e020.jpg',
    city: 'Copenhague',
    country: 'Dinamarca'
  },
  {
    title: 'City11',
    url: 'https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg',
    city: 'Estambul',
    country: 'Turquía'
  },
  {
    title: 'City12',
    url: 'https://cafedelasciudades.com.ar/wp-content/uploads/2022/12/Guia-turistica-de-Sidney.jpg',
    city: 'Sídney',
    country: 'Australia'
  },
  ]
  const handlePrev = () => {
      setIndex(index - 4)
  }

  const handleNext = () => {
      setIndex(index + 4)
  }
  return (
    <>
      <div className='min-h-[60vh]'>
        <h2 className='bg-white text-center text-black text-bold text-3xl mb-2'>Popular MYTINERARIES</h2>
        <div className='md:mx-20 h-[70vh] grid grid-cols-2 grid-rows-2 gap-4'>
          {[0, 1, 2, 3].map((i) => (
            <a key={i} className='block group relative bg-black '>
              <img
                className='absolute inset-0 object-cover object-center h-full w-full'
                src={images[index + i].url}
              />
              <div className='relative p-4 sm:p-6 lg:p-8 bg-black bg-opacity-40'>
                <p className='text-2xl text-center uppercase tracking-widest text-white'>
                  {images[index + i].city}
                </p>
                <p className="text-xl text-center font-bold  text-white sm:text-2xl">
                  {images[index + i].country}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className='flex justify-center my-2'>
          <button className=' bg-indigo-50 px-5 py-3 mx-4 text-sm shadow-sm font-medium tracking-wider text-indigo-600 rounded-full hover:shadow-2xl hover:bg-indigo-100' onClick={handlePrev}>Prev</button>
          <button className='bg-indigo-50 px-5 py-3 mx-4 text-sm shadow-sm font-medium tracking-wider text-indigo-600 rounded-full hover:shadow-2xl hover:bg-indigo-100' onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  )
}
export default Carousel