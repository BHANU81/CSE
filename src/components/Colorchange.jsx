import React, { useState } from 'react'

export const Colorchange = () => {
    const[color,setColor]=useState("red");
  return (
    <div>
        <h1 style={{color:color}}>My favourite color is</h1>
        <button onClick={()=>{setColor("blue")}}
        >Blue</button>
        <button onClick={()=>{setColor("red")}}
        >Red</button>
        <button onClick={()=>{setColor("pink")}}
        >Pink</button>
        <button onClick={()=>{setColor("green")}}
        >Green</button>

        </div>
  )
}