import React from 'react'
import Home from './Home'
import Count from './count'
import Change from './Change'

export default function App() {
  let fname = "Divya";
  return (
    <div>
      <h1>Welcome </h1>
      {/* <Home name = {fname} />  */}
      {/* <Count /> */}
      <Change />
    </div>
  )
}
