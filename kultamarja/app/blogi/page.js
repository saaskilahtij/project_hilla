
import BlogiLayout from "./BlogiLayout";

export const metadata = {
  title: 'Kultamarjan blogi',
  description: 'Kultamarja blogi, jossa päivitetään tietoja myyntireissuista, hinnoista, hillanpoiminnasta jne. markkinoivasti.',
  keywords: [
    "blogi",
    "Kultamarjan blogi",
    "hillaa",
    "hillan myynti",
    "hillan keräys",
    "hilla",
    "Kultamarja",
  ]
}

export default function Home () {

  return(
    <BlogiLayout/>
    );
}