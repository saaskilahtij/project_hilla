import Image from 'next/image'
import Berry1 from 'public/pictures/landing_berry1.png'
import Berry2 from 'public/pictures/landing_berry2.png'




export default function Home() {
  return (
    <main className="font-PlayFairDisplay text-darkGreen overflow-hidden">
      <div className='text-center mt-24'>
        <h1 className='text-4xl'>
          Lakka, Lapin Lahja Ihmiselle.
        </h1>
          <h2 className='flex flex-col mt-6 text-2xl whitespace-nowrap'>
            <span className='mt-2 relative left-[-50px]'>Hehkuva hilla,</span>
            <span className='mt-2'>tähtinen timantti,</span>
            <span className='mt-2 relative right-[-50px]'>säteilevä suomuurain.</span>
          </h2>
      </div>
      <div className='flex flex-col mt-14 space-x-4'>
        <div className='flex flex-col items-center justify-center'>
          <Image 
            src={ Berry1 }
            className="w-[275px] border-2 border-darkGreen shadow-lg"
          />
          <h3 className='relative text-xl font-PlayFairDisplay italic'>
            Hilla:
          </h3>
          <p className='relative text-lg font-Lora italic w-[250px]'>
            1. Muurain, varsinkin sen (kypsä) marja, lakka.
          </p>
        </div>
        <div className='mt-14'>
          <h4 className='text-3xl font-Lora'>
            Kerätä hillaa, myydä hillaa, on jakaa iloa.
          </h4>
          <p className='text-xl font-Lora mt-5'>
            Kolme kaverusta Lapista jakoi idean: Mitäpä jos keräisimme hillaa, 
            tätä Lapin kultaista kaunokaista, ja mitäpä jos kauppaisimme makeuden myös teille. 
            Maista Lapin makeutta! 
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-14'>
        <div>
          <Image
            src={Berry2}
            className="w-[275px] border-2 border-darkGreen shadow-lg"
          />
          <p className='text-lg font-Lora italic'>
            Hilla yksin aattelevi...
          </p>
        </div>
        <div>
          <h5 className='text-3xl mt-14'>
            Tule osaksi tarinaa, osta marjaa makeaa!
          </h5>
          <p className='text-xl mt-6'>
            Meitä matkaajia voi seurata blogin kautta. 
            Jos osumme lähellesi, tulethan hakemaan meiltä tätä pohjoisen mystistä karkkikukkaa. 
            Ei ole myöskään väärin haluta hillaa kotiovelle, tässä tapauksessa otathan meihin yhteyttä!
          </p>
        </div>
      </div>
      {/* <div className='flex flex-col'>
        <h5 className='text-3xl mt-14'>
          Jos halajat hillaa,
          otathan yhteyttä.
        </h5>
        <div className='flex flex-col'>
          <div>
            <form 
              id='contact-form'
              onSubmit=""
              className='relative w-full md:w-[60] font-Lora text-3xl overflow-hidden'
            >
              <label htmlFor='email'>
                <h5 className='text-2xl'>
                  Sähköposti:
                </h5>
              </label>
              <input 
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                id="email"
                maxLength={25}
                minLength={2}
                className="block w-full text-sm border-darkGreen px-2 py-2 md:p-5 border-2"
                placeholder="Sähköpostisi"
              />
              <label htmlFor='message'>
                <h5 className='text-2xl'>
                  Viestisi:
                </h5>
              </label>
              <input 
                type="text"
                required
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                maxLength={25}
                minLength={2}
                className=" align-text-top block w-full text-sm border-darkGreen px-2 py-10 md:p-5 border-2"
                placeholder="Viestisi"
              />
              <button
                type="submit"
                className="px-10 py-2 border-darkBlue border-[2px] md:w-auto w-full font-GeneralSans text-base md:text-xl  rounded-full cursor-pointer hover:bg-green-300 duration-300"
                onClick={handleSubmit}
              > 
                Lähetä
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </main>
  )
}
