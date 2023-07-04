'use client';
// Imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "/public/pictures/cloudberry.png"
import { ArrowDownOutline } from 'react-ionicons'
/* MAIN */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Navigation Path
  const pathname = usePathname();

  // Scroll kuuntelija joka piilottaa navbar:in kun käyttähä scrollaa alaspäin ja näyttää kun käyttäjä scrollaa ylöspäin
  useEffect(() => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    const handleScroll = () => {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Älä tee mitään, jos mobiilivalikko on auki
      if (isOpen) {
        // st = newScrollTop; // päivitä st:n arvo niin, että se vastaa vierityksen hetkistä sijaintia
        return;
      }
      /* Navigointipalkki piiloutuu, kun käyttäjä vierittää alas
       paitsi jos käyttäjä on sivun yläosassa 
       */
      if (newScrollTop > st && newScrollTop > 50) {
        setIsHidden(true);
      } else if (newScrollTop < st || newScrollTop === 0) {
        setIsHidden(false);
      }
      st = newScrollTop; // päivitä st:n arvo niin, että se vastaa vierityksen hetkistä sijaintia
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // 'isOpen' riippuvuus

  // Laskee --vh:n joka ottaa huomioon mobiili laitteilla olevan hakupalkin, joka voi tulla eteen.
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setVh);
    setVh();

    return () => window.removeEventListener("resize", setVh);
  }, []);

  // Sanity fetch
  return (
    <header>
      <nav
        className={`flex fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-1000 items-center ${
          isHidden ? "-translate-y-full" : ""
        }
    `}
      >
        {/* CONTAINER */}
        {/* Desktop */}
        <div className="z-50 px-5 relative w-screen grid gap-[1rem] grid-cols-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md items-center min-h-[60px]">
          {/* TITLE - Navbar Left */}
          <div className="justify-self-start z-50 col-start-1">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src={Logo}
                alt="Kultamarjan hilla logo"
                className="w-[50px]"
              /> 
            </Link>
          </div>
          {/* LINKS - Navbar Middle */}
          <ul className="col-start-6 space-x-10 font-PlayFairDisplay text-2xl justify-self-center md:flex {<-- Normaali //768px Mobiili --> } hidden">
            <li>
              <Link href="/tarina">
                <p className="hover:text-cloudberry hover:duration-500">
                  Tarina
                </p>
              </Link>
            </li>
            <li>
              <Link href="/reference">
                <p className="hover:text-cloudberry hover:duration-500">
                  Blogi
                </p>
              </Link>
            </li>
            <li>
              <Link href="/info">
                <p className="hover:text-cloudberry hover:duration-500">
                  Info
                </p>
              </Link>
            </li>
          </ul>
          {/* CONTACT - Navbar Right */}
          <div className="col-end-13 justify-self-end md:block {<-- Normaali //768px Mobiili --> } hidden whitespace-nowrap">
            <Link href="/contact">
              <p className="px-6 py-2 border-2 rounded-xl font-RedHatDisplay border-darkGreen //HOVER hover:bg-cloudberry hover:duration-500">
                Ota Yhteyttä
              </p>
            </Link>
          </div>

          {/* Hamburger menu */}
          <div
            className="space-y-2 col-end-13 justify-self-end md:hidden z-50 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
          <span
              className={`block rounded-lg h-[3px]  bg-darkGreen duration-1000 transform transition-all ${
                isOpen ? "translate-x-1.5 w-6" : "w-8"
              }`}
            />
            <span
              className={`block rounded-lg h-[3px]  bg-darkGreen duration-1000 transform transition-all ${
                isOpen ? "translate-x-1.5 w-8" : "w-6"
              }`}
            />
          </div>
        </div>

        {/* Desktop * END */}

        {/* Mobile */}
        {/* Mobile Container */}
        <div className="md:hidden block">
          {/* Mobile Items */}
          <div
            className={`z-40 absolute top-0 left-0 bg-white h-screen w-full ${
              isOpen
                ? "translate-y-0 duration-[1.4s]"
                : "-translate-y-full duration-[1s]"
            }`}
            style={{ height: "calc(var(--vh, 1vh) * 100)" }}
          >
            <div className="flex flex-col h-full w-full px-5 py-[60px] justify-between">
              {/* LINKS */}
              <ul className="flex flex-col justify-center flex-grow items-center space-y-24 text-2xl font-PlayFairDisplay">
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/tarina">
                    <p
                      className="hover:text-cloudberry">
                      Tarina
                    </p>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/blogi">
                    <p className="hover:text-cloudberry">
                      Blogi
                    </p>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} href="/info">
                    <p
                      className="hover:text-cloudberry">
                      Info
                    </p>
                  </Link>
                </li>
              </ul>

              {/* Finnish & CONTACT */}
              <div className="flex justify-center items-center">
                <Link onClick={() => setIsOpen(false)} href="/contact">
                  <p className="px-10 py-2 border-[1px] rounded-xl border-darkBlue //HOVER hover:bg-cloudberry hover:duration-500">
                    Ota Yhteyttä
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Second Back */}
          <div
            className={`z-30 absolute top-0 left-0 bg-oceanBlue h-screen w-full ${
              isOpen
                ? "translate-y-0 duration-[1s]"
                : "-translate-y-full duration-[1.4s]"
            }`}
            style={{ height: "calc(var(--vh, 1vh) * 100)" }}
          />
          {/* Mobile * END */}
        </div>
      </nav>
    </header>
  );
}
