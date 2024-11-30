
// eslint-disable-next-line no-unused-vars
import Player from './Pages/Player/Player'
import {Routes,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'
import Signin from './Pages/SignIN/Signin'
// import Login from './Pages/Login/Login'
// import { onAuthStateChanged } from 'firebase/auth'
// import {auth} from './Config/Firebase'

const App = () => {
return (
    <div>
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/home' element={   <Home />}/>
      <Route path='/SignUP' element={<SignUp />}/>
      <Route path='/player/:id' element={<Player />}/>
    </Routes>
   
    </div>
  )
}

export default App
