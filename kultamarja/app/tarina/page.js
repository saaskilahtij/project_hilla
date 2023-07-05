import Image from 'next/image';
import Tarina1 from '/public/pictures/tarina_1.png'
import Tarina2 from '/public/pictures/tarina_2.png'
import Tarina3 from '/public/pictures/tarina_3.png'
import Tarina4 from '/public/pictures/tarina_4.png'
import Tarina5 from '/public/pictures/tarina_5.png'
import Tarina6 from '/public/pictures/tarina_6.png'


export default function Home() {

  return(
    <main className='font-Lora mt-2'>
      <div>
        <h1 className="text-3xl text-center">
          <span className="">Minäpä kerron - </span>
          <span className="">kultamarjan kohtalosta</span>
        </h1>
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p className=''>Työn, toimen polte sydämessä kolme kaverusta heräsi - kesäillan hämärässä, kultamarjoja keräsi. </p>
        <Image 
          src={Tarina1}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p>
          Lapin yön yli kulkivat, kera kesäisen taivaan.
          Tuulet, puut ja linnut soivat; jäi taakse lämpö, emon hoivat.
        </p>
        <Image
          src={Tarina2}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p>
          Saivatpahan hyvän aatteen -
          päättivät jakaa makean aarteen!
        </p>
        <Image
          src={Tarina3}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p>
          Kauaksi kulkivat Pohjolan pojat; riensivät, polkivat, taivalsivat.
          Yli suon ja metsän suuren ojan, yhtenä  voimana askelsivat. 
        </p>
        <Image
          src={Tarina4}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p>
          Pääsivätpä suurelle kirkolle, hilloja Pekalle, Pirkolle,
          asukkaille, viranhaltijoille. Koko Suomen suurelle kansalle!
        </p>
        <Image
          src={Tarina5}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
      <div className='flex flex-col items-center mt-16 w-[300px] mx-auto text-lg border-2 border-darkGreen p-5 rounded-xl'>
        <p>
          Leudot Lapin pojat marjan tuopi, kun lakkaa Pohjan ukko suopi!
          Suo meille ilo, kunnia, teille hillaa punnita.
        </p>
        <Image
          src={Tarina6}
          className="w-[275px] border-4 border-darkGreen shadow-lg mt-4"
        />
      </div>
    </main>
  );

}