import Image from "next/image";
import Link from "next/link";
import Info1 from "/public/pictures/info_1.png";
import Joonatan from "/public/pictures/headshot_joonatan.jpg"; 
import Eero from "/public/pictures/headshot_eero.jpg";
import Johan from "/public/pictures/headshot_johan.jpeg";


export default function Home() {

  return(
    <main className='flex flex-col items-center justify-center font-Lora mt-22'>
      <h1 className="font-PlayFairDisplay text-4xl w-[300px] mt-10
      md:w-full md:text-center md:text-5xl md:mt-24">
        Mielitsetkö Lapin kultaista marjaa?
      </h1>
      <div className="md:flex md:flex-row md:justify-between md:mt-16">
        <div className="flex flex-col w-[300px] mt-10 text-xl
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
        <div className="flex items-center justify-center mt-10">
          <Image
            src={Info1}
            alt="Hillan kukka"  
            width={300}
            height={300}
            className="w-auto border-2 border-darkGreen shadow-lg"
          />
        </div>
      </div>
      <div className="mt-16 md:w-full md:mt-24">
        <h2 className="text-4xl w-[300px] text-center
        md:w-full">
          Kultamarjan kultaiset poimijat: 
        </h2>
        <div className="flex flex-col items-center justify-center mt-10">
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