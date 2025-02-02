import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { Faculty } from './components/faculty/Faculty.jsx'
import { Home } from './components/Hero.jsx'
import { Result } from './components/result/Result.jsx'
import { ResultDashBoard } from './components/result/ResultDashBoard.jsx'
import { Topper } from './components/topper/Topper.jsx'
import './index.css'

import { ResultDemo } from './components/result/ResultDemo.jsx'
import { ResultPage } from './components/result/ResultPage.jsx'
import class6 from "./data/topper.json"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='/result' element ={<ResultPage/>}/>
    <Route path='/result/academic' element ={<Result/>}/>
    <Route path='/result/boards' element ={<ResultDemo/>}/>
    <Route path='/result/scholarship' element ={<ResultDemo/>}/>
    <Route path='/faculties' element ={<Faculty/>}/>
    <Route path='/toppers' element ={<Topper/>}/>
    <Route path='/contact' element ={<Contact/>}/>
    
    <Route path='/result/linkClass6' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass7' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass8' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass9' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass10' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass11' element ={<ResultDashBoard value={class6}/>}/>
    <Route path='/result/linkClass12' element ={<ResultDashBoard value={class6}/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
