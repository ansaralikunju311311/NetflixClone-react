import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

import { auth } from '../../Config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useForm } from 'react-hook-form'
const SignUp = () => {
  const navigate = useNavigate();
  
  const submit = async (data) => {
    try {
      console.log("Submitting data: ", data); 
      await createUserWithEmailAndPassword(auth, data.email, data.password,data.username);
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Firebase Error:", error);
      alert('not valid')  

      
    }
  };




  const {register,handleSubmit,formState:{errors}} = useForm();
  return (
    <div className='login'>
    <img src={logo} alt=""  className='login-logo'/>
        <div className="login-form">
           <h1>Sign Up</h1>
           <form action="" onSubmit={handleSubmit(submit)}>
            <input type="text"  placeholder='Your name' name='username' {...register("username",
            {required:{value:true,message:'enter field'}}
            )}/>
             {errors.username && <p>{errors.username.message}</p>}
            <input type="email" placeholder='Email'
              {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address"
            }
          })}
            />
             {errors.email && <p>{errors.email.message}</p>}

            <input type="password" placeholder='password'  
              {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
            />
             {errors.password && <p>{errors.password.message}</p>}
            <button type='submit'>Sign Up</button>
            <div className="form-help">
                <div className="remeber">
                    <input type="checkbox" />
                    <label htmlFor="">Remember</label>
                </div>
                <p>Need Help</p>
            </div>
           </form>
           <div className="form-switch">
            <p>Already have account? <span>
             <Link to="/" className='link'>
             Sign In Now
             </Link>
           </span></p>
           </div>
         </div>
    </div>
  )
}

export default SignUp
