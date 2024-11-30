import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { auth } from '../../Config/Firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Signin.css'
const Signin = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm();

    const submit = async (data) => {
        const { email, password } = data;
        
        try {
          // Firebase sign-in
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/home'); 
        } catch (error) {
          console.error("Login Error:", error);
          alert("Invalid credentials. Please try again.");
        }
      };



  return (
    <div className='login'>
    <img src={logo} alt=""  className='login-logo'/>
        <div className="login-form">
           <h1>Sign In</h1>
           <form action=""  onSubmit={handleSubmit(submit)}>
            
            <input type="email" placeholder='Email' name='email'
             {...register("email",{required:{value:true,message:'enter the email'}})}
                
             />
                     {errors.email && <p>{errors.email.message}</p>}

            <input type="password" placeholder='password' name='password'

{...register("password",{required:{value:true,message:'enter the correct password'}})}

            />
                    {errors.password && <p>{errors.password.message}</p>}

            <button type='submit'>Sign In</button>
            <div className="form-help">
                <div className="remeber">
                    <input type="checkbox" />
                    <label htmlFor="">Remember</label>
                </div>
                <p>Need Help</p>
            </div>
           </form>
           <div className="form-switch">
            <p>New to Netflix? <span>
            <Link to="/SignUp" className='link'>
            Sign Up Now</Link></span></p>
           </div>
         </div>
    </div>
  )
}

export default Signin
