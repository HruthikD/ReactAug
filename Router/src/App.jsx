import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
  return (
    <div>
      <h1>Welcome to react routing</h1>
  <Navbar />
  <Routes>
  <Route path="/" element = {<Home />}></Route>
  <Route path="/About" element = {<About />}></Route>
  <Route path="/Contact" element = {<Contact />}></Route>
    </Routes>  
    </div>
  )
}
