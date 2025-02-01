import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Result } from './components/Result'
import Footer from './components/Footer'

function App() {

  return <>
  <NavBar/>
  <Outlet/>

 <Footer/>
  
  </>
}

export default App
