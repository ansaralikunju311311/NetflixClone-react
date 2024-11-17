import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState,setState] = useState('Sign In')
  return (
    <div className='login'>
      <img src={logo} alt=""  className='login-logo'/>
      
      <form action="" className='login-form'>
      <h1>{signState}</h1>
      {signState==='Sign Up'? <input type="text" placeholder='your name'/>:<></>}
       
        <input type="email"  placeholder='email'/>
        <input type="password"  placeholder='password'/>
        <button>{signState}</button>
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
