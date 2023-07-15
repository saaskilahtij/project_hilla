
import BlogLayout from "./BlogLayout";

// todo: write metadata

export const metadata = {
  title: "Kultamarjan blogi",
  description: 'Kultamarjan blogi, jossa kerromme hillan keruusta, hillan myynnistä ja muista marjoihin liittyvistä asioista.',
  keywords: [
    "blogi",
    "hillaa",
    "hillan myynti",
    "hillan keräys",
    "hillaa Oulu",
    "hillaa Lappi",
    "hillaa Rovaniemi",
    "osta hillaa",
    "keräämme hillaa",
    "hilla",
    "marjan myynti",
    "marjojen myynti",
    "Kultamarja",
  ]
}

export default function Home () {

  return(
     <BlogLayout />
    );
}