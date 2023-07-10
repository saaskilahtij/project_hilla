'use client';

import { useState, useEffect } from "react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";


export default function Home () {

  const [screenWidth, setScreenWidth] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // set screenWidth when component mounts
    setScreenWidth(window.innerWidth);
    // then update screenWidth whenever window resizes
    const handleResize = () => { setScreenWidth(window.innerWidth) };
    window.addEventListener('resize', handleResize);
    getProjects().then(data => setProjects(data));

    // Remember to remove event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  if (!screenWidth) return null;

  return(
    <main className="flex flex-col justify-center items-center mt-2 font-Lora">
      <div className="font-PlayFairDisplay mt-[50px]">
        <h1 className="text-4xl 
          md:text-5xl">
          Täällä kerrotaan missä mennään!
        </h1>
        <h2 className="text-4xl mt-2
          md:text-5xl">
          Vielä ei mennä, vielä suunnitellaan.
        </h2>
      </div>
        {projects.map((project, index) => {
          return(
            <div key={index} id={project._id}
              className="w-[300px] mt-24
              md:w-[600px]">
              <div className="flex flex-row justify-between text-xl
              md:text-2xl">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
              </div>
              <Image 
                src={project.image}
                // Vedä alt tänne
                alt="Blogi kuva"
                width={screenWidth < 768 
                  ? 300
                  : 600}
                height={screenWidth < 768 
                  ? 300
                  : 600}
                className="border-2 border-darkGreen shadow-lg"
              />
              {project.content.map(block =>
                block.children.map(child => {
                  return (
                    <p key={child._key}
                      className="mt-2 text-lg md:text-xl">
                      {child.text}
                    </p>
                  );
                })
              )}
            </div>
          );
        })}
        </main>
    );
}