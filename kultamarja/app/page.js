'use client';

import Image from 'next/image'
import Berry1 from 'public/pictures/landing_berry1.png'
import Berry2 from 'public/pictures/landing_berry2.png'
import { getCloudberries } from '@/sanity/sanity-utils';

import validator from 'validator';
import { useState } from 'react';

// todo: fetch the amount of cloudberries from sanity


export default function Home() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cloudberriesAmount, setCloudberriesAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validator.isEmail(email)) {
      alert("Virheellinen sähköposti");
      return;
    }
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      if (res.ok) {
        alert("Viesti lähetetty!");
        setEmail('');
        setMessage('');
      } else {
        alert("Viestin lähetys epäonnistui");
      }
    } catch(error) {
      console.log(error);
    }
    setEmail('');
    setMessage('');
  }
  
  // getCloudberries().then(data => console.log(data));

  return (
    <main className="font-PlayFairDisplay text-darkGreen overflow-hidden">
      <div className='flex flex-col items-center text-center mt-14 md:mt-24'>
        <h1 className='flex flex-col text-4xl text-left w-[300px]
          md:w-full md:flex md:flex-row md:whitespace-nowrap md:items-center md:justify-center md:text-5xl'>
          Lakka, 
          <span>
            {' '}Lapin Lahja Ihmiselle.
          </span>
        </h1>
        <div className='flex flex-col w-[300px] mt-10 text-2xl space-y-4
        md:space-y-8 md:w-full md:text-3xl' >
          <p className='flex
          md:relative md:flex-col md:items-center md:justify-center md:text-center md:left-[-150px]'>
            Hehkuva hilla,
          </p>
          <p className='relative left-[-20px]
          md:flex-col md:items-center md:justify-center'>
            tähtinen timantti,
          </p>
          <p className='text-right
          md:relative md:flex-col md:text-center md:items-center md:justify-center md:right-[-150px]'>
            säteilevä suomuurain.
          </p>
        </div>
      </div>
      <div className='flex flex-col mt-24 space-x-4 items-center
        md:flex md:flex-row-reverse md:justify-between'>
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
            <span className='relative right-[-30px]'>
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
        <h5 className='text-4xl md:text-5xl mt-20 md:mt-24 md:text-center' >
          Vielä voi tilata!
        </h5>
        <p className='text-xl md:text-2xl italic md:text-center mt-2 md:mt-4 mb-10 md:mb-14'>
          Hillaa kerätty: <span className='text-cloudberry text-3xl'>0</span> kg / <span className='text-cloudberry text-3xl'>300</span> kg
        </p>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-4xl mt-16
        md:text-5xl'>
          Jos halajat hillaa,
          otathan yhteyttä.
        </h5>
        <div className='flex flex-col mt-12'>
          <div>
            <form 
              id='contactForm'
              onSubmit={handleSubmit}
              className='relative w-auto md:w-[60] font-Lora text-3xl overflow-hidden'
            >
              <label htmlFor='email'>
                <h5 className='text-2xl'>
                  Sähköposti:
                </h5>
              </label>
              <input 
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                maxLength={50}
                minLength={2}
                className="block w-[300px] text-sm border-darkGreen px-2 py-2 md:p-5 border-2 mt-1"
                placeholder="Sähköpostisi"
              />
              <label htmlFor='message'>
                <h5 className='text-2xl mt-6'>
                  Viestisi:
                </h5>
              </label>
              <textarea
                type="text"
                required
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                maxLength={500}
                minLength={2}
                className=" align-text-top block w-[300px] h-[100px] text-sm border-darkGreen px-2 md:p-5 border-2 mt-1
                md:w-[600px] md:h-[250px]"
                placeholder="Viestisi"
              />
              <button
                type="submit"
                className="px-10 py-2 border-darkBlue border-[2px] w-auto font-GeneralSans text-base md:text-xl  rounded-full cursor-pointer hover:bg-green-300 duration-300 mt-6"
              > 
                Lähetä
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}