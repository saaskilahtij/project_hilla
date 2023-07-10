import Image from 'next/image';
import Tarina1 from '/public/pictures/tarina_1.png'
import Tarina2 from '/public/pictures/tarina_2.png'
import Tarina3 from '/public/pictures/tarina_3.png'
import Tarina4 from '/public/pictures/tarina_4.png'
import Tarina5 from '/public/pictures/tarina_5.png'
import Tarina6 from '/public/pictures/tarina_6.png'


export default function Home() {

  return(
    <main className='flex flex-col font-Lora md:mt-20 justify-center items-center'>
      <div className='mt-10 md:mt-[100px]'>
        <h1 className="text-4xl text-center md:text-5xl">
          <span className="">Minäpä kerron - </span>
          <span className="">kultamarjan kohtalosta</span>
        </h1>
      </div>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl mt-10 md:mt-24
      md:flex md:flex-row md:w-[600px] md:text-xl'>
        <p className='md:mr-6'>
          Työn, toimen polte sydämessä kolme kaverusta heräsi - kesäillan hämärässä, kultamarjoja keräsi. 
        </p>
        <Image 
          src={Tarina1}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='mt-4 md:mt-8 h-[2px] w-[300px] bg-cloudberry md:hidden'/>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl
      md:flex md:flex-row-reverse md:w-[600px] md:text-xl'>
        <p className='mt-4 md:mt-8 md:ml-10'>
          Lapin yön yli kulkivat, kera kesäisen taivaan.
          Tuulet, puut ja linnut soivat; jäi taakse lämpö, emon hoivat.
        </p>
        <Image
          src={Tarina2}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='mt-4 md:mt-8 h-[2px] w-[300px] bg-cloudberry md:hidden'/>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl
      md:flex md:flex-row md:w-[600px] md:text-xl'>
        <p className='mt-8 md:mr-6'>
          Saivatpahan hyvän aatteen -
          päättivät jakaa makean aarteen!
        </p>
        <Image
          src={Tarina3}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='mt-4 md:mt-8 h-[2px] w-[300px] bg-cloudberry md:hidden'/>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl
      md:flex md:flex-row-reverse md:w-[600px] md:text-xl'>
        <p className='mt-4 md:mt-8 md:ml-10'>
          Kauaksi kulkivat Pohjolan pojat; riensivät, polkivat, taivalsivat.
          Yli suon ja metsän suuren ojan, yhtenä  voimana askelsivat. 
        </p>
        <Image
          src={Tarina4}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='mt-4 md:mt-8 h-[2px] w-[300px] bg-cloudberry md:hidden'/>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl
      md:flex md:flex-row md:w-[600px] md:text-xl'>
        <p className='mt-8 md:mr-6'>
          Pääsivätpä suurelle kirkolle, hilloja Pekalle, Pirkolle,
          asukkaille, viranhaltijoille. Koko Suomen suurelle kansalle!
        </p>
        <Image
          src={Tarina5}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='mt-4 md:mt-8 h-[2px] w-[300px] bg-cloudberry md:hidden'/>
      <div className='flex flex-col items-center w-[300px] mx-auto text-lg p-5 rounded-xl
      md:flex md:flex-row-reverse md:w-[600px] md:text-xl'>
        <p className='mt-4 md:mt-8 md:ml-10'>
          Leudot Lapin pojat marjan tuopi, kun lakkaa Pohjan ukko suopi!
          Suo meille ilo, kunnia, teille hillaa punnita.
        </p>
        <Image
          src={Tarina6}
          className="w-[300px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
    </main>
  );

}