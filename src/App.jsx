import React, { Component, useEffect } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    
    <HashRouter>
      <Routes>

   
      <Route path='/' element={<Hero />} />
      <Route path='/Skills' element={<Skills />}/>
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Footer' element={<Footer />} />
    </Routes>
    </HashRouter>

  )
}
