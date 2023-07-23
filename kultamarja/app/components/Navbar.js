'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/pictures/cloudberry.png';



export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(null);


  useEffect(() => {
    if (windowWidth < 768) {
      if(menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [menuOpen, windowWidth]);
  

  useEffect(() => {
    
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };
  
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const scrollToContact = () => {
    document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" });
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;
  
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  



  return (
    <nav className={`sticky z-50 top-0 bg-vanilla ${visible ? 'translate-y-[0%] duration-1000' : 'translate-y-[-100%] duration-1000'}`}>
      <div className="font-PlayFairDisplay flex 
        md:flex-row md:justify-between">
        <div className='mt-2 ml-5 flex flex-row'>
          <Link href="/">
            <Image
              src={Logo}
              alt="Kultamarjan hilla logo"
              width={50}
              height={50}
            />
            <p className={`relative font-PlayFairDisplay text-black duration-1000 italic top-[-6px]`} >
              Etusivulle
            </p>
          </Link>
        </div>
        <ul className={`
          md:flex md:flex-row md:h-auto md:w-auto md:relative md:space-x-24 md:translate-y-0 md:bg-opacity-0 md:space-y-0
          transform transition-all h-screen w-screen absolute bg-darkGreen space-y-28 text-2xl 
          ${ menuOpen 
            ? 'translate-y-0 duration-1000' 
            : 'translate-y-[120%] duration-1000'}`}>
          <div
            className={`flex flex-col items-end space-y-2 md:hidden z-50 cursor-pointer my-auto ml-auto mr-5 transform mt-8`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
                className={`block rounded-full h-[2.5px] duration-1000 transform transition-all bg-vanilla w-8 rotate-45`}
            />
            <span
                className={`absolute top-[-8px] block rounded-full h-[2.5px] duration-1000 transform transition-all bg-vanilla w-8 -rotate-45`}
            />
          </div>
          <li className="text-center" onClick={() => {
              if (windowWidth < 768) {
                setMenuOpen(!menuOpen);
              }
            }}>
            <Link href="/info" prefetch>
              <p className={`
                ${menuOpen 
                  ? 'text-vanilla hover:text-cloudberry duration-1000'
                  : 'mt-5 md:text-2xl hover:text-vanilla hover:bg-darkGreen md:p-2 rounded-lg duration-1000'
                }`}>
                Info
              </p>
            </Link>
          </li>
          <li className="text-center" onClick={() => {
              if (windowWidth < 768) {
                setMenuOpen(!menuOpen);
              }
            }}>
            <Link href="/blogi" prefetch>
              <p className={`
                ${menuOpen 
                  ? 'text-vanilla hover:text-cloudberry duration-1000'
                  : 'mt-5 md:text-2xl hover:text-vanilla hover:bg-darkGreen md:p-2 rounded-lg duration-1000'
                }`}>
                Blogi
              </p>
            </Link> 
          </li>
          <li className="text-center" onClick={() => {
            if (windowWidth < 768) {
              setMenuOpen(!menuOpen);
            }
          }}>
          <Link href="/tarina" prefetch>
            <p className={`
                ${menuOpen 
                  ? 'text-vanilla hover:text-cloudberry duration-1000'
                  : 'mt-5 md:text-2xl hover:text-vanilla hover:bg-darkGreen md:p-2 rounded-lg duration-1000'
                }`}>
              Tarina
            </p>
          </Link>
          </li>
          <div className='flex justify-center'>
            <button onClick={() => { 
              setMenuOpen(!menuOpen) 
              scrollToContact()}} 
            className={` md:hidden `}>
              <p className="px-6 py-2 border-2 rounded-xl font-PlayFairDisplay text-xl duration-1000 hover:text-cloudberry text-vanilla hover:border-cloudberry hover:duration-1000">
                Tilaa
              </p>
            </button>
          </div>
        </ul>
        <button onClick={ scrollToContact } 
          className={` md:block hidden `}>
          <p className="px-6 py-2 border-2 mr-5 rounded-xl font-PlayFairDisplay border-darkGreen text-xl duration-1000 hover:bg-darkGreen hover:text-vanilla hover:border-vanilla hover:duration-1000">
            Tilaa
          </p>
        </button>
        <div
            className={`space-y-2 md:hidden z-50 cursor-pointer my-auto ml-auto mr-5 transform ${menuOpen ? " translate-x-[50px] duration-1000" : "translate-x-0 duration-1000"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
          <span
              className={`block rounded-full h-[2.5px] duration-1000 transform transition-all bg-darkGreen w-8`}
          />
          <span
              className={`block rounded-full h-[2.5px] duration-1000 transform transition-all bg-darkGreen w-6`}
          />
        </div>
      </div>
    </nav>
  );
}
