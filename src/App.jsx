
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={   <Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
   
    </div>
  )
}

export default App
