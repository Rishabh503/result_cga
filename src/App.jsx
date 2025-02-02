import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import { TopBar } from './components/Header'

function App() {

  return <>
  <TopBar/>
  <Outlet/>
  <Footer/>
  
  </>
}

export default App
