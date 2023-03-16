// import needed assets
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { Link } from 'react-router-dom';

// main function
const LogIn = () => {

  // declare states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // sign in function
  const signIn = (e) => {
    // stop page reload
    e.preventDefault();
    // use firebaseFunction to login user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className=" flex flex-col justify-center items-center gap-10 w-full h-full" >
      <div className='loginBox h-full w-500 mt-9'>
        <div className='loginBox border bg-mainGreen rounded-t-lg h-10 w-500 flex justify-between  px-7 py-1'>
          <p className='text-center w-full'>Please Log in</p>
        </div>
        <div className='h-60 border bg-bgLight border-secondaryShadow rounded-b-lg flex flex-col justify-center items-center gap-5'>
          <form className='flex flex-col justify-center items-center w-full gap-7'
            /* call function signIn */
            onSubmit={signIn}>
            <input
              className='text-center w-2/4 placeholder:text-center'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type='email'>
            </input>
            <input
              className='text-center w-2/4 placeholder:text-center'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              type='password'>
            </input>
            <button
              id='shadow'
              type="submit"
              className='h-10 w-40 bg-mainGreen hover:bg-secondaryShadow'>Log in
            </button>
          </form>
          <Link to="/SignUp"> <p className="text-xs" >Don't have an account?</p></Link>
        </div>
      </div>
    </div >
  )
}

//export function
export default LogIn;