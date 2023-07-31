"use client";

import BerryProduct from "./BerryProduct";


export default function Cloudberry() {
  
  const scrollToContact = () => {
      document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className='flex justify-center items-center mt-24 md:mt-44'>
        <div className='flex flex-col bg-vanilla rounded-lg drop-shadow-lg md:drop-shadow-none md:hover:drop-shadow-xl duration-1000 w-[300px] justify-center items-center p-3
        md:flex md:flex-row md:w-[700px] md:justify-between md:p-6'>
          <h1 className='md:hidden text-2xl'>
            Älyttömän maukas hilla!
          </h1>
          <BerryProduct />
          <div className='flex flex-col
          md:mr-auto md:ml-auto'>
            <h1 className='hidden md:block text-3xl
            md:relative top-[-15px]'>
              Älyttömän maukas hilla!
            </h1>
            <div className='flex flex-row justify-between w-[255px]
            md:flex md:flex-col'>
              <p className='relative hidden top-[-10px] md:block'>
                Verraton vitamiininlähde.
              </p>
              <p className='flex flex-col text-lg py-2 whitespace-nowrap
                md:flex md:flex-row md:relative md:bottom-[-28px]'>
                <span className='text-[24px] md:text-[30px]'>
                   18€ / kg {' '} 
                </span>
                <span className='md:relative md:right-[-5px] md:bottom-[-5px]'>
                  + toimitus alkaen 0€ 
                </span>
              </p>
              <p className='hidden md:block md:relative md:bottom-[-75px] italic'>
                Hillan keruu loppunut. 
              </p>
              
              <button 
                onClick={scrollToContact}
              className='border-2 hover:border-vanilla border-darkGreen px-4 h-[50px] mt-3 hover:bg-darkGreen hover:text-vanilla duration-1000
              md:w-[100px] md:h-[40px] md:relative md:bottom-[-27px] md:right-[-220px] rounded-lg'>
              <span className="absolute left-[-2px] bottom-[15px] h-[4px] w-[100px] rounded-sm bg-darkGreen rotate-45" />
                Tilaa
              <span className="absolute left-[-2px] bottom-[15px] h-[4px] w-[100px] rounded-sm bg-darkGreen -rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}