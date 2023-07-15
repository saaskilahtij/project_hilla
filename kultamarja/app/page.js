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
      <div className='flex flex-col mt-24 md:mt-44 items-center'>
        <h5 className='text-3xl text-center
        md:text-5xl '>
          Vielä voi tilata!
        </h5>
        <p className='text-center text-2xl mt-2 w-[300px]
        md:text-4xl md:mt-4'>
          Kilohintaan:
        </p>
        <p className='font-extrabold text-cloudberry text-center mt-2 text-3xl
        md:text-4xl'>
          18€ / kg
        </p>
        <p className='text-center w-[300px] mt-2 text-xl
        md:text-2xl'>
          + toimitus alkaen {' '}
          <span className='font-extrabold text-cloudberry text-2xl
          md:text-3xl'>
            0€
          </span>
          ,
        </p>
        <p className='text-center w-[300px] text-xl
        md:text-2xl'>
          kotiovelle tietenkin -
        </p>
        <p className='text-xl text-right
        md:text-2xl'>
          Ja etenkin edullisesti.
        </p>
      </div>
      <div className='flex flex-col items-center text-2xl
        md:text-4xl'>
        <p className='w-[300px] text-2xl italic text-center mt-6
        md:text-5xl md:mt-14'>
          Hillaa kerätty: 
        </p>
        <p className='w-[300px] text-center text-cloudberry text-2xl font-extrabold 
        md:text-4xl md:mt-2 md:w-full'>
          0 <span className='text-darkGreen font-normal'>Litraa /</span> 300 <span className='text-darkGreen font-normal'>Litraa</span>
        </p>
      </div>
      <div className='flex flex-col mt-24 space-x-4 items-center
        md:flex md:flex-row-reverse md:justify-between md:mt-36'>
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
            Kerätä {' '}
            <span className='italic text-cloudberry'>hillaa</span>, 
            myydä {' '}
            <span className='italic text-cloudberry'>hillaa</span>
            , on jakaa iloa.
          </h4>
          <p className='text-xl font-Lora mt-5 
            md:text-2xl'>
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
          <p className='text-xl mt-6
          md:w-full md:pb-24 md:text-2xl'>
            Meitä matkaajia voi seurata blogin kautta. 
            Jos osumme lähellesi, tulethan hakemaan meiltä tätä pohjoisen mystistä karkkikukkaa. 
            Ei ole myöskään väärin haluta hillaa kotiovelle, tässä tapauksessa otathan meihin yhteyttä!
          </p>
        </div>
      </div>
      <Contact/>
    </main>
  )
}