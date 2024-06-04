import React from 'react'

export default function Form() {
  return (
    <div>
        <div className=' font-bold text-[20px] mt-10'>SEND MESSAGE</div>

        <div className=' lg:w-[50%]'>
            <form action="">
                <input className='border-2 border-gray-400 w-full px-3 py-4 rounded-[10px] my-5 ' type="text" name="" id="" placeholder='Name' />
                <input className='border-2 border-gray-400 w-full px-3 py-4 rounded-[10px] my-5' type="email" name="" id="" placeholder='Email'/>
                <input className='border-2 border-gray-400 w-full px-3 py-4 rounded-[10px] my-5' type="text" name="" id=""  placeholder='Website'/>
                <input className='border-2 border-gray-400 w-full px-3 pb-24 pt-3 rounded-[10px] my-5' type="text" name="" id=""  placeholder='Message'/>
                <input className='font-bold text-white bg-red-700 rounded-[50px] px-10 py-3 hover:bg-red-600' type="button" value="SEND MESSAGE" />
            </form>
        </div>
    </div>
  )
}
