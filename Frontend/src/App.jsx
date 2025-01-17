import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import Contact from './Components/Contact'
import AboutUs from './Components/About'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/> : <Navigate to="/signup"/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/signup' element={<Signup/>} />
      </Routes> 
      <Toaster/>

     </div>
    </>
  )
}

export default App
