import { useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import data from "../starter-code/data.json"

export default function Crew() {
  const [crew] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crew[value]

  return (
    <>

    </>
  )
}
