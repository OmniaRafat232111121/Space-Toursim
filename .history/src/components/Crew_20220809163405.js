import { useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import data from "../starter-code/data.json"

export default function Crew() {
  const [crew]=useState(crew.data);
  const [value,setValue]=useState(0);
  const {name,images,role,bio}=crew[value];
  return (
    <>
    <section className="home crew">
    <div className="px-">
    </div>
     
    </section>

    </>
  )
}
