import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../database/Config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'



export default function Reset() {
    const [email, setEmail] = useState('')

    const reset = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            toast.success('A link has been sent to your email')
        })
        .catch((error) =>{
            toast.error(error.message)
            
        })
        

    
    }

  return (
    <div className='flex justify-center items-center h-[500px]'>
        <form action="" onSubmit={reset}>
            <p className=' text-center'>Forgot Password</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5 ' type="email" name="" id="" placeholder='Enter your email'/><br />
            <button className=' bg-blue-600 w-full text-white py-2'>Reset password</button>
            <Link className=' hover:text-blue-500 text-center' to='/login'>Login</Link>

        </form>

    </div>
  )
}
