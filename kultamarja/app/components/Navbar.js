import Image from "next/image";
import Logo from "/public/pictures/cloudberry.png"

const Navbar = () => {

  return(
    <nav className="flex flex-row justify-between pt-5 px-5">
      <Image
        src={ Logo }
        alt="Kultamarjan hilla logo"
        className="w-[75px]"
      />
    </nav>
  );
}


export default Navbar;