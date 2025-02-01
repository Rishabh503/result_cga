import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Result } from './components/Result'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <>
  <NavBar/>
  <Result />
  <Footer/>

  </>
}

export default App
