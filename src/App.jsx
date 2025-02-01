import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Result } from './components/Result'
import Footer from './components/Footer'
import { TopBar } from './components/TopBar'

function App() {

  return <>
  <TopBar/>
  <NavBar/>
  <Outlet/>

 <Footer/>
  
  </>
}

export default App
