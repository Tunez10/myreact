import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../database/Config'



export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential
        toast.success('Login successfully')
       })
      .catch((error) =>{
      toast.error('error Login in')
      
       })

  setEmail('')
  setPassword('')
  }



  

  return (
    <div className='flex justify-center items-center h-[500px]'>
        <form action="" onSubmit={login}>
            <p className='text-center'>Login</p>
            <input onChange={(e) => setEmail(e.target.value)} value = {email} className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5 'type="email" name="" id="" placeholder='Enter your Email' /><br />
            <input onChange={(e) => setPassword(e.target.value)} value = {password} className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5 ' type="password" name="" id="" placeholder='Enter your password' /><br />
            <button className='border-2 bg-blue-600 text-white px-40 py-3 w-full hover:bg-blue-500'>Login</button><br />
            <p className='text-center'>Don't have an account? <Link className=' hover:text-blue-500' to='/register'>Register Here</Link></p>
            <p className='text-center'><Link className=' hover:text-blue-500' to='/reset'>Forgot Password?</Link></p>

        </form>
    </div>
  )
}
