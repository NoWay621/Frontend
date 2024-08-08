import { useState } from 'react'
import Navbar from './Components/Navbar';
import{ Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Profile from "./Pages/profile";
import Contact from "./Pages/Contact";

function App() {
 return (
    <>
    <Navbar />
    <main>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Shop" element={<Shop />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/Contact" element={<Contact />}/>
     </Routes>
    </main>
    </>
  )
}

export default App
