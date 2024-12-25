import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {  NavbarMain } from './pages/NavbarMain'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Home } from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<NavbarMain />}/>
      <Route path='/home' element={<Home />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
