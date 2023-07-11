'use client';

import Image from "next/image";
import Link from "next/link";
import Info1 from "/public/pictures/info_1.png";
import Joonatan from "/public/pictures/headshot_joonatan.jpg"; 
import Eero from "/public/pictures/headshot_eero.jpg";
import Johan from "/public/pictures/headshot_johan.jpeg";

// todo: add gsap animation to the first section headers, paragraphs and images.

import {gsap} from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {

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


  return(
    <main className='flex flex-col items-center justify-center font-Lora mt-22'>
      <h1 ref={header}
        className="font-PlayFairDisplay text-4xl w-[300px] mt-10
          md:w-full md:text-center md:text-5xl md:mt-24">
        Mielitsetkö Lapin kultaista marjaa?
      </h1>
      <div className="md:flex md:flex-row md:justify-between md:mt-16">
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
      <div className="mt-16 md:w-full md:mt-[200px]">
        <h2 className="text-4xl w-[300px] text-center
        md:w-full">
          Kultamarjan kultaiset poimijat: 
        </h2>
        <div className="flex flex-col items-center justify-center mt-10 md:mt-24">
          <Image
            src={Joonatan}
            alt="Marjanpoimija Joonatan"
            width={300}
            height={300}
            className="border-2 border-darkGreen shadow-lg"
          />
          <p className="mt-2 w-[300px] text-start text-xl">
            Joonatan Höyhtyä 😆
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src={Eero}
            alt="Marjanpoimija Topias"
            width={300}
            height={300}
            className="border-2 border-darkGreen shadow-lg"
          />
          <p className="mt-2 w-[300px] text-start text-xl">
            Topias Hintsala 😎
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src={Johan}
            alt="Marjanpoimija Johan"
            width={300}
            height={300}
            className="border-2 border-darkGreen shadow-lg"
          />
          <p className="mt-2 w-[300px] text-start text-xl">
            Johan Sääskilahti 🧐
          </p>
        </div> 
      </div>
    </main>
  );

}