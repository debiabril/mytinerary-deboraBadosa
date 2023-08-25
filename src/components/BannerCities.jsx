import React, { useEffect, useState } from 'react';
import title from '../assets/cities.png';
import title2 from '../assets/cities2.png';

export default function BannerCities() {
  const [isTitle1, setIsTitle1] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTitle1(prevIsTitle1 => !prevIsTitle1);
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='w-100 h-96 bg-bannerCities bg-cover bg-center flex justify-center items-center'>
      <img src={isTitle1 ? title : title2} alt='Banner' />
    </div>
  );
}
