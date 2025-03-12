// write button card here
import React from 'react'

function button() {
  const handleClick=()=>{
    alert(" product details loading....");
  }
  return (
    <div>

        <button onClick={handleClick} >Viem Product</button>
    </div>
  )
}

export default button