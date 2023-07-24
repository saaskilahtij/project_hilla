'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Info1 from '@/public/pictures/info_1.png';

export default function Header() {
  
  const header = useRef(null);
  const paragraph = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    gsap.from(header.current, {
      duration: 1.5,
      opacity: 0,
      y: -300,
      ease: "power3.out",
      delay: 0.5
    });
    gsap.from(paragraph.current, {
      duration: 1.5,
      opacity: 0,
      x: -300,
      ease: "power3.out",
      delay: 1
    });
    gsap.from(image.current, {
      duration: 1.5,
      opacity: 0,
      x: 300,
      ease: "power3.out",
      delay: 1
    });
  }, []);
  
  
  return (
    <div>
      <h1 ref={header}
          className="font-PlayFairDisplay text-4xl w-[300px]
            md:w-full md:text-center md:text-5xl md:mt-10">
          Mielitsetkö Lapin kultaista marjaa?
        </h1>
        <div className="md:flex md:flex-row md:justify-between md:mt-2">
          <div ref={paragraph}
            className="flex flex-col w-[300px] mt-10 text-xl
              md:w-[600px] md:mx-6 md:text-2xl">
            <p>
              Keräämme hilloja sekä teemme matkoja Suomen sisällä kaupataksemme nämä ihanat makeiset. 
              Reittejä ja matkoja ei ole vielä päätetty, mutta suunnittelemme matkoja valtakunnallisesti.
            </p>
            <p className="mt-2">
              Jos haluat seurata matkaamme ja tietää missä mennään, suosittelen {' '}
              <span className="italic hover:text-cloudberry hover:duration-1000">
                <Link href="/blogi">
                  blogiamme
                </Link>
              </span> 
              {' '}sekä{' '} 
              <span className="italic hover:text-cloudberry hover:duration-1000">
                <Link href="https://www.instagram.com/kultamarja.fi/">
                  Instagramiamme
                </Link>
              </span> 
            </p>
          </div>
          <div ref={image}
            className="flex items-center justify-center mt-10">
            <Image
              src={Info1}
              alt="Hillan kukka"  
              width={300}
              height={300}
              className="w-auto border-2 border-darkGreen shadow-lg"
            />
          </div>
        </div>
      </div>
  );
}