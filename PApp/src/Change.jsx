import React, { useState } from 'react'

export default function Change() {
    let [name, setName] = useState("Hruthik");
    const change = () => {
        setName("shranya");
    }
  return (
    <div>
        <h1>Hello {name}!</h1>
      <button onClick={change}>Change name</button>
    </div>
  )
}
