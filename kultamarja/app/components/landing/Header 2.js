'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
 
  const header1 = useRef(null);
  const header2 = useRef(null);
  const header3 = useRef(null);
  const header4 = useRef(null);


  useEffect(() => {
    // Make sure our elements are available
    if (header1.current && header2.current && header3.current && header4.current) {
      // Create a timeline for our animation
      const timeline = gsap.timeline();
  
      // Add animations to the timeline
      timeline
        .fromTo(header1.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(header2.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(header3.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(header4.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    }
  }, []);
 

  return (
    <div className='flex flex-col items-center text-center mt-20 md:mt-[150px]'>
        <h1 ref={header1} 
          className='flex flex-col text-4xl text-left w-[300px]
            md:w-full md:flex md:flex-row md:whitespace-nowrap md:items-center md:justify-center md:text-5xl'>
          Lakka,
          <span className='md:ml-3'>
            Lapin Lahja Ihmiselle.
          </span>
        </h1>
        <div className='flex flex-col w-[300px] mt-10 text-2xl space-y-4
            md:space-y-8 md:w-full md:text-3xl' >
          <p ref={header2}
            className='flex
              md:relative md:flex-col md:items-center md:justify-center md:text-center md:left-[-150px]'>
            Hehkuva hilla,
          </p>
          <p ref={header3}
            className='relative left-[-20px]
              md:flex-col md:items-center md:justify-center'>
            tähtinen timantti,
          </p>
          <p ref={header4}
            className='text-right
              md:relative md:flex-col md:text-center md:items-center md:justify-center md:right-[-150px]'>
            säteilevä suomuurain.
          </p>
        </div>
      </div>
  );

}