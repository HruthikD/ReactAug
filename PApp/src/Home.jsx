import React from 'react'
import Contact from './Contact'
export default function Home(props) {
    
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <Contact fn = {props.name}/>
    </div>
  )
}
