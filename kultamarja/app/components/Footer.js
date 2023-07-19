

// todo: a footer that has links to social media and other stuff.
// I want instagram, and the paths to the Tarina etc. pages.
// Plus some cool styling if possible.

import Link from "next/link";
import { ExportSquare } from "iconsax-react";

// <ExportSquare size="32" color="#ff9204"/>

export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t-2 border-darkGreen mt-24 py-16 md:mt-24">
            <div className="flex flex-row items-center justify-center space-x-16 mt-20">
              <Link 
                prefetch
                href="/tarina">
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                  Tarina
                </p>
              </Link>
              <Link 
                prefetch  
                href="/blogi">
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                  Blogi
                </p>
              </Link>
              <Link 
                prefetch  
                href="/info">
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl hover:text-vanilla hover:bg-darkGreen bg-opacity-50 p-2 rounded-lg duration-1000 hover:border-2 hover:border-vanilla">
                  Info
                </p>
              </Link>
            </div>  
            <Link href="https://www.instagram.com/kultamarja.fi/">
              <div className="flex flex-row items-center justify-center space-x-4 my-4
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
            <div className="flex flex-row w-full justify-between font-PlayFairDisplay italic text-start mt-4">
              <p className="mx-5 my-2 text-md">
                2023 Kultamarja © 
              </p>
              <p className="mx-5 text-lg">
                Luku {' '}
                <span className="text-[32px]">
                  1.0
                </span>
              </p>
            </div>
        </footer>
    );
}