import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

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


     <article className="pt-20 text-center md:text-left pb-10">
           <ul className="flex it">
           </ul>

            <h2 className="text-white font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between pt-5">
              <li className="uppercase text-gray-200 text-xl">
                Avg. Distance<span className="text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 text-xl">
                Est. travel time<span className="text-4xl block">{travel}</span>
              </li>
            </ul>
          </article>
     </div>
     </section>
    </>
  )
}
