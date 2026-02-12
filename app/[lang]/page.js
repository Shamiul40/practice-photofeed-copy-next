import Image from "next/image";
import { getDictionary } from "./dictionaries/getDectionary";

export default async function Home({params, lang}) {

  const dictionary = await getDictionary(lang)
  console.log(dictionary)

  return (
    <>
    <h1 className="text-xs">Shamiul Islam</h1>
    <h1 className="text-xs">{dictionary.views}</h1>
    
    </>
  );
}
