import Image from "next/image";
import Joonatan from "/public/pictures/headshot_joonatan.jpg"; 
import Eero from "/public/pictures/headshot_eero.jpg";
import Johan from "/public/pictures/headshot_johan.jpeg";

import Header from "/app/components/info/Header.js";

export const metadata = {
  title: 'Kultamarjan info 💭',
  description: 'Kultamarjan info sisältää tietoa kultamarjan poiminnasta ja poimijoista.',
  keywords: [
    "info",
    "marjanpoimijat",
    "hillanpoimijat",
    "hilla",
    "Kultamarja",
  ]
}


export default function Home() {


  return(
    <main className='flex flex-col items-center justify-center font-Lora overflow-hidden'>
      <Header/>
      <div className="mt-16 md:w-full md:mt-[150px]">
        <h2 className="text-4xl w-[300px] text-center
        md:w-full">
          Kultamarjan kultaiset poimijat: 
        </h2>
        <div className="flex flex-col md:flex-row mt-6">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Joonatan}
              alt="Marjanpoimija Joonatan"
              width={300}
              height={300}
              className="border-2 border-darkGreen shadow-lg"
            />
            <div className="flex flex-row justify-between w-[300px] bg-darkGreen text-vanilla p-3">
              <p className="text-center text-xl">
                01
              </p>
              <p className="text-center text-xl pr-4">
                Joonatan Höyhtyä
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src={Eero}
              alt="Marjanpoimija Topias"
              width={300}
              height={300}
              className="border-2 border-darkGreen shadow-lg"
            />
            <div className="flex flex-row justify-between w-[300px] bg-darkGreen text-vanilla p-3">
              <p className="text-center text-xl">
                02
              </p>
              <p className="text-center text-xl pr-4">
                Topias Hintsala
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src={Johan}
              alt="Marjanpoimija Johan"
              width={300}
              height={300}
              className="border-2 border-darkGreen shadow-lg"
            />
            <div className="flex flex-row justify-between w-[300px] bg-darkGreen text-vanilla p-3">
              <p className="text-center text-xl">
                03
              </p>
              <p className="text-center text-xl pr-4">
                Johan Sääskilahti
              </p>
            </div>
          </div>
        </div> 
      </div>
    </main>
  );

}