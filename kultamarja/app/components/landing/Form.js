'use client';

import validator from "validator";
import { useEffect, useState } from "react";

import { Puff } from "react-loader-spinner";


// todo: create a modal that is shown when the message is being sent and when it's sent.



export default function Contact() { 
	
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }
  }, [isSent]);


	const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validator.isEmail(email)) {
      alert("Virheellinen sähköposti");
      return;
    }
    
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      if (res.ok) {
        setIsLoading(false);
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
          <h1 className='text-4xl mt-16
          md:text-5xl md:mt-28'>
            Jos halajat hillaa,
            otathan yhteyttä.
          </h1>
          <div className='flex flex-col mt-12'>
            <form 
              onSubmit={handleSubmit}
              className='relative w-auto md:w-[60] font-Lora text-3xl overflow-hidden'
            >
            <label htmlFor='email'>
              <h2 className='text-2xl'>
                Sähköposti:
              </h2>
            </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                maxLength={50}
                minLength={2}
                className="block w-[300px] text-sm border-darkGreen px-2 py-2 md:p-5 border-2 mt-1 rounded-xl
                hover:border-vanilla hover:bg-darkGreen hover:text-vanilla duration-1000"
                placeholder="Sähköpostisi"
              />
              <label htmlFor='message'>
                <h3 className='text-2xl mt-6'>
                  Viestisi, kuinka paljon hillaa ja minne:
                </h3>
              </label>
              <textarea
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                maxLength={500}
                minLength={2}
                className=" align-text-top block w-[300px] h-[100px] text-sm border-darkGreen p-2 border-2 mt-1 rounded-xl
                md:w-[600px] md:h-[250px] hover:border-vanilla hover:bg-darkGreen hover:text-vanilla duration-1000"
                placeholder="Viestisi"
              />
              <div className="flex flex-row">
                <button
                  type="submit"
                  disabled={isSent}
                  className="px-10 py-2 border-darkBlue border-[2px] w-auto font-GeneralSans text-base rounded-full mt-6
                    md:text-xl hover:bg-darkGreen hover:text-vanilla hover:border-vanilla duration-1000"
                > 
                  <span className={isLoading ? 'hidden' : 'block'}>
                    Lähetä
                  </span>
                  <div className={
                  isLoading 
                  ? 'flex z-10 justify-center items-center'
                  : 'hidden'}>
                    <Puff
                      height="20"
                      width="20"
                      radius={1}
                      color="#FF9204"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                </button>
              </div>
            </form>
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