import React from 'react'
import { useState } from 'react'

export default function Count() {
    // let count = 1;
   let[count, setCount] = useState(1);
   const inc = () => {
    setCount( count = count + 1);
   }

//    const ins = () => {
//     setCount( count = count - 1);
//    }
   
  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={inc}>Increment count</button>
      <button onClick={() => setCount(count = count-1)}>Decrement count</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
