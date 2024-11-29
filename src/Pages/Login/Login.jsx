import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../Config/Firebase'
const Login = () => {
  const [signState,setState] = useState('Sign In');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const user_auth = async (event)=>
  {
    event.preventDefault();
    if(signState==='Sign In')
    {
      await login(email,password)
    }
    else
    {
      await signup(name,email,password)
    }
  }
  return (
    <div className='login'>
      <img src={logo} alt=""  className='login-logo'/>
      
      <form action="" className='login-form'>
      <h1>{signState}</h1>
      {signState==='Sign Up'? <input type="text" placeholder='your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>:<></>}
       
        <input type="email"  placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password"  placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={user_auth} type='submit'>{signState}</button>
        <div className='form-help'>
          <div className="remeber">
            <input type="checkbox" />
            <label htmlFor="">Remeber Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        <div className="form-switch">
        {signState==="Sign In"?
         <p>New to Netflix <span onClick={()=>setState("Sign Up")}>Sign Up Now</span></p>
         : <p>Already have an account? <span onClick={()=>setState("Sign In")}>Sign in Now</span></p>}
      </div>
      </form>
     
    </div>
  )
}
export default Login
