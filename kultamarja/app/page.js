


import Image from 'next/image'
import Berry1 from 'public/pictures/landing_berry1.png'
import Berry2 from 'public/pictures/landing_berry2.png'
// import { getCloudberries } from '@/sanity/sanity-utils';

import Contact from './components/landing/Form';
import Header from './components/landing/Header';



export default function Home() {


  
  // getCloudberries().then(data => console.log(data));

  

  return (
    <main className="font-PlayFairDisplay text-darkGreen overflow-hidden">
      <Header/> 
      <div className='flex flex-col mt-24 space-x-4 items-center
        md:flex md:flex-row-reverse md:justify-between md:mt-[250px]'>
        <div className='flex flex-col items-center justify-center md:ml-16'>
          <Image 
            src={ Berry1 }
            alt="Lähikuva hillasta"
            className="w-[300px] border-2 border-darkGreen shadow-lg"
          />
          <p className='font-Lora italic text-lg w-[300px] mt-2'>
            <span className='text-xl font-PlayFairDisplay'>
              Hilla:
            </span>
            <span className='relative right-[-15px]'>
              {' '} 1. Muurain, varsinkin sen 
              <span className='relative right-[-70px]'>
                {' '}(kypsä) marja, lakka.
              </span>
            </span>
          </p>
        </div>
        <div className='flex flex-col mt-16 w-[300px]
          md:w-full md:pb-44'>
          <h4 className='text-4xl font-Lora w-[300px]
          md:w-full md:text-5xl'>
            Kerätä hillaa, myydä hillaa, on jakaa iloa.
          </h4>
          <p className='text-lg font-Lora mt-5 
            md:text-xl'>
            Kolme kaverusta Lapista jakoi idean: Mitäpä jos keräisimme hillaa, 
            tätä Lapin kultaista kaunokaista, ja mitäpä jos kauppaisimme makeuden myös teille. 
            Maista Lapin makeutta! 
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-16
        md:flex md:flex-row md:justify-between'>
        <div className='md:mr-16'>
          <Image
            src={Berry2}
            alt="Lähikuva raa'asta hillasta"
            width={300}
            height={300}
            className="border-2 border-darkGreen shadow-lg"
          />
          <p className='text-lg font-Lora italic mt-2'>
            Hilla yksin aattelevi...
          </p>
        </div>
        <div className='w-[300px] md:w-full'>
          <h5 className='text-4xl mt-16 w-[300px]
          md:w-full md:text-5xl'>
            Tule osaksi tarinaa, osta marjaa makeaa!
          </h5>
          <p className='text-lg mt-6
          md:w-full md:pb-24 md:text-xl'>
            Meitä matkaajia voi seurata blogin kautta. 
            Jos osumme lähellesi, tulethan hakemaan meiltä tätä pohjoisen mystistä karkkikukkaa. 
            Ei ole myöskään väärin haluta hillaa kotiovelle, tässä tapauksessa otathan meihin yhteyttä!
          </p>
        </div>
      </div>
      <div>
        <h5 className='text-4xl md:text-5xl mt-20 md:mt-24 text-center' >
          Vielä voi tilata!
        </h5>
        <p className='text-xl md:text-2xl italic md:text-center mt-2 md:mt-4 mb-10 md:mb-14'>
          Hillaa kerätty: <span className='text-cloudberry'>0 Litraa / 300 Litraa </span>
        </p>
      </div>
      <Contact/>
    </main>
  )
}