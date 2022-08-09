import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [plants]=useState(data.destination);
  const [value,setValue]=useState(0);
  const { name, images, description, distance, travel } = planets[value]
  return (
    <>
     <section>
     <div>
     <article className="text-center md:text-left">
     <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
     01
     <span className="ml-5 font-bold">Pick your destination</span>
   </h2>
      <img   src={images.png}
      alt={name}
      title={name}
      className="block mx-auto"/>
     </article>


     
     </div>
     </section>
    </>
  )
}
