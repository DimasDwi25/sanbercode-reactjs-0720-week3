import React from "react"
import {BuahProvider} from "./Tugas15Context"
import BuahForm from "./Tugas15Form"

const Buah = () =>{
  return(
    <BuahProvider>
      <BuahForm />
    </BuahProvider>
  )
}

export default Buah