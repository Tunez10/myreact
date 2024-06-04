import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../database/Config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')

    const register = (e) => {
        e.preventDefault()
        if (password != confirmpass) {
            // console.log('password do not match')
            toast.error('password do not match')
        }
        if (password.length < 6){
            // console.log('must be at least 6 characters')
            toast.error('must be at least 6 characters')
        }
        createUserWithEmailAndPassword(auth ,email , password)
        .then((userCredential)=>{
            const user = userCredential
            toast.success('Registered successfully')
        })
        .catch((error) =>{
            toast.error('not created')
            
        })
        
       
       
        setEmail('')
        setPassword('')
        setConfirmpass('')
    }
  return (
    <div className='flex justify-center items-center h-[500px]'>
        <div>
            <form action="" onSubmit={register}>
                <p className=' text-center'>Register</p>
                <input onChange={(e) => setEmail(e.target.value)} value ={email} className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5' type="email" name="" id="" placeholder='Email' /><br />
                <input onChange={(e) => setPassword(e.target.value)} value ={password}  className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5' type="password" name="" id="" placeholder='password'/><br />
                <input onChange={(e ) => setConfirmpass(e.target.value)} value ={confirmpass}  className='py-2 px-3 lg:w-96 w-full border-2 border-white-700 my-5'type="password" name="" id="" placeholder='confirm pasword'/><br />
                <button className='border-2 bg-blue-600 text-white px-40 py-3 w-full  hover:bg-blue-500'>Register</button>
                <p className='text-center text-[20px]'>Already have an account? <Link className=' hover:text-blue-500' to='/login' >login</Link></p>
            </form>
            

        </div>
        
    </div>
  )
}
