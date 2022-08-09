import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <>
     
    </>
  )
}
