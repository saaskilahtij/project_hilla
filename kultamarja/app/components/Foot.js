
import Link from 'next/link';

import Contact from './Form.js'

import { ExportSquare } from "iconsax-react";
// todo: copy links from the Footer.js file and paste them here.

export default function Footer() {
  return (
    <footer className=" font-PlayFairDisplay pt-5 px-5 flex flex-col bg-vanilla items-center mt-16">
        <div className='flex flex-row mt-4'> 
          <Contact />
        </div>
        <div className='flex flex-col-reverse md:flex-row w-[320px] md:w-full md:mx-auto md:justify-center md:items-center md:space-x-8'>
          <div className='mt-8 md:flex md:flex-row justify-between md:space-x-6'>
            <ul>
              <li>
                <Link href="/tarina">
                  <p className="text-xl font-PlayFairDisplay text-center md:text-start
                      md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                    Tarina
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blogi">
                  <p className="text-xl font-PlayFairDisplay text-center md:text-start
                      md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                    Blogi
                  </p>  
                </Link>
              </li>
              </ul>
              <ul>
              <li>
                <Link href="/info">
                  <p className="text-xl font-PlayFairDisplay text-center md:text-start
                      md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                    Info
                  </p>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/kultamarja.fi/">
                  <div className="flex flex-row items-center justify-center space-x-4
                    hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000">
                    <p className="flex flex-row text-xl font-PlayFairDisplay
                    md:text-2xl">
                      Instagram
                    </p>
                    <div className="relative left-[-14px] bottom-[-3px]">
                      <ExportSquare size="15" color="#013220"/>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* SVG ELEMENTS */}
          <div className='flex flex-row md:mt-8 mt-12 justify-between'>
            <div>
              <svg width="90" height="99" viewBox="0 0 50 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.21539 46L25 10L45.7846 46H4.21539Z" fill="#013220" stroke="#FF9204"/>
                <path d="M4.21539 37L25 0.999999L45.7846 37H4.21539Z" stroke="#013220"/>
              </svg>
            </div>
            <div>
              <svg width="90" height="99" viewBox="0 0 50 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.21539 37L25 0.999999L45.7846 37H4.21539Z" fill="#FF9204" stroke="#013220"/>
                <path d="M4.21539 46L25 10L45.7846 46H4.21539Z" stroke="black"/>
              </svg>
            </div>
            <div>
              <svg width="90" height="98" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.21539 37L25 0.999999L45.7846 37H4.21539Z" fill="#013220" stroke="#FF9204"/>
                <path d="M4.21539 45L25 9L45.7846 45H4.21539Z" fill="#FF9204" stroke="#013220"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between font-PlayFairDisplay italic text-start mt-10 mb-1">
          <p className="text-md">
            2023 Kultamarja © 
          </p>
          <p className="text-lg">
            Luku {' '}
            <span className="text-[32px]">
              1.0
            </span>
          </p>
        </div>
    </footer>
  );
}


