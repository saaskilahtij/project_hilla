'use client';

import validator from "validator";
import { useState } from "react";


export default function Contact() { 
	
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");


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

	return (
		<div
      className="flex flex-col md:flex-row">
      <div id='contactForm'
        className='flex flex-col'>
          <h5 className='text-4xl mt-16
          md:text-5xl md:mt-28'>
            Jos halajat hillaa,
            otathan yhteyttä.
          </h5>
          <div className='flex flex-col mt-12'>
            <div>
              <form 
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
                  className="block w-[300px] text-sm border-darkGreen px-2 py-2 md:p-5 border-2 mt-1 rounded-xl"
                  placeholder="Sähköpostisi"
                />
                <label htmlFor='message'>
                  <h5 className='text-2xl mt-6'>
                    Viestisi, kuinka paljon hillaa ja minne:
                  </h5>
                </label>
                <textarea
                  type="text"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  maxLength={500}
                  minLength={2}
                  className=" align-text-top block w-[300px] h-[100px] text-sm border-darkGreen px-2 md:p-5 border-2 mt-1 rounded-xl
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
        {/* <div className="flex flex-col mt-[200px]">
          <p>
            Tai ota toimi käteen ja soita:
          </p>
          <p>
            CONTACT 0452758597
          </p>
        </div> */}
      </div>
	);

}