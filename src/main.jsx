import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import { ResultDashBoard } from './components/ResultDashBoard.jsx'
import { Result } from './components/Result.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Faculty } from './components/Faculty.jsx'
import { Topper } from './components/Topper.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
    <Route path='' element ={<NavBar/>}/>
    <Route path='/result' element ={<Result/>}/>
    <Route path='/faculties' element ={<Faculty/>}/>
    <Route path='/toppers' element ={<Topper/>}/>
    

    <Route path='/result/linkClass6' element ={<ResultDashBoard value={"class 6"}/>}/>
    <Route path='/result/linkClass7' element ={<ResultDashBoard value={"class 7"}/>}/>
    <Route path='/result/linkClass8' element ={<ResultDashBoard value={"class 8"}/>}/>
    <Route path='/result/linkClass9' element ={<ResultDashBoard value={"class 9"}/>}/>
    <Route path='/result/linkClass10' element ={<ResultDashBoard value={"class 10"}/>}/>
    <Route path='/result/linkClass11' element ={<ResultDashBoard value={"class 11"}/>}/>
    <Route path='/result/linkClass12' element ={<ResultDashBoard value={"class 12"}/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
