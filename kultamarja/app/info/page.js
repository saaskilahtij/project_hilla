import Image from "next/image";
import Joonatan from "/public/pictures/headshot_joonatan.jpg"; 
import Eero from "/public/pictures/headshot_eero.jpg";
import Johan from "/public/pictures/headshot_johan.jpeg";

import Header from "/app/components/info/Header.js";

export const metadata = {
  title: 'Kultamarjan info',
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
    <main className='flex flex-col items-center justify-center font-Lora mt-22'>
      <Header/>
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