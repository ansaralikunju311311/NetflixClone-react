
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Player from './Pages/Player/Player'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './Config/Firebase'

const App = () => {
  const navigate = useNavigate();
  useEffect(()=>
  {
     onAuthStateChanged(auth,async (user)=>
    {
      if(user)
      {
        navigate('/')
      }
      else
      {
          console.log('log out');
          navigate('/login');
      }
    })
  },[])
return (
    <div>
    <Routes>
      <Route path='/' element={   <Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/player/:id' element={<Player />}/>
    </Routes>
   
    </div>
  )
}

export default App
