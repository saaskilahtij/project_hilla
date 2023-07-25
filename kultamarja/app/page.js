import Image from 'next/image'
import Berry1 from 'public/pictures/landing_berry1.png'
import Berry2 from 'public/pictures/landing_berry2.png';


import Header from './components/landing/Header';
import Cloudberry from './components/landing/Cloudberry';


export default function Home() {


  return (
    <main className="font-PlayFairDisplay text-darkGreen overflow-hidden">
      <Header/> 
      <Cloudberry/>
      <div className='flex flex-col items-center text-2xl
        md:text-4xl'>
        <p className='w-[300px] text-2xl italic text-center mt-24
        md:text-5xl md:mt-36'>
          Hillaa kerätty: 
        </p>
        <p className='w-[300px] text-center text-darkGreen text-2xl font-extrabold 
        md:text-4xl md:mt-2 md:w-full'>
          50 <span className='font-normal'>Kg /</span> 300 <span className='font-normal'>Kg</span>
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
          <h1 className='text-4xl font-Lora w-[300px]
          md:w-full md:text-5xl'>
            Kerätä {' '}
            <span className='italic'>hillaa</span>, 
            myydä {' '}
            <span className='italic'>hillaa</span>
            , on jakaa iloa.
          </h1>
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
          <h2 className='text-4xl mt-16 w-[300px]
          md:w-full md:text-5xl'>
            Tule osaksi tarinaa, osta marjaa makeaa!
          </h2>
          <p className='text-xl mt-6
          md:w-full md:pb-24 md:text-2xl'>
            Meitä matkaajia voi seurata blogin kautta. 
            Jos osumme lähellesi, tulethan hakemaan meiltä tätä pohjoisen mystistä karkkikukkaa. 
            Ei ole myöskään väärin haluta hillaa kotiovelle, tässä tapauksessa otathan meihin yhteyttä!
          </p>
        </div>
      </div>
    </main>
  )
}