import Image from "next/image";
import Info1 from "/public/pictures/info_1.png"; 


export default function Home() {

  return(
    <main className='font-Lora mt-2'>
      <h1>
        Mielitsetkö Lapin kultaista marjaa?
      </h1>
      <div>
        <div className="flex flex-col">
          <p>
            Keräämme hilloja sekä teemme matkoja Suomen sisällä kaupataksemme nämä ihanat makeiset. 
            Reittejä ja matkoja ei ole vielä päätetty, joten myös niitä voi toivoa Ota yhteyttä sivulla. 
          </p>
          <p>
            Jos haluat seurata matkaamme ja tietää missä mennään, suosittelen blogiamme sekä Instagramiamme.
          </p>
        </div>
        <Image
          src={Info1}  
        />
      </div>
    </main>
  );

}