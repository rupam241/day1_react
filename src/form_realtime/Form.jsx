import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const getValue=(e)=>{
     setValue(e.target.value)
    }
    const[value,setValue]=useState(null)
  return (
    <>
   <input type="text"  onChange={getValue} />
   <p>User input:{value}</p>

    </>
  )
}

export default Form