

// todo: a footer that has links to social media and other stuff.
// I want instagram, and the paths to the Tarina etc. pages.
// Plus some cool styling if possible.

import Link from "next/link";


export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t-2 border-darkGreen mt-16 py-16 md:mt-24">
            <div className="flex flex-row items-center justify-center space-x-16 mt-4">
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl">
                    <Link href="/tarina">
                        Tarina
                    </Link>
                </p>
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl">
                    <Link href="/blogi">
                        Blogi
                    </Link>
                </p>
                <p className="text-xl font-PlayFairDisplay
                    md:text-2xl">
                    <Link href="/info">
                        Info
                    </Link>
                </p>
            </div>  
            <div className="flex flex-row items-center justify-center space-x-4 my-4">
                <p className="text-xl font-PlayFairDisplay
                md:text-2xl">
                    <Link href="https://www.instagram.com/kultamarja.fi/">
                        Instagram
                    </Link>
                </p>
            </div>
        </footer>
    );
}