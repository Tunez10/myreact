import React from 'react'
import { Link } from 'react-router-dom'

export default function Showinfo() {
  return (
    <div className='lg:flex gap-3'>
        <div className='lg:w-[50%] w-[100%] relative mt-3 md:w-[100% ] '>
          <img className=' h-screen md:h-auto' src="imgs/womenfashion.jpg" alt="" />
          <p className='font-bold text-[50px] absolute top-52 lg:left-20 left-10'>Women’s fashion <br /> <span className='text-gray-500 font-normal text-[15px] '>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-<br/>unt labore edolore magna aliquapendisse ultrices gravida</span></p>
        </div>
        
        <div className='lg:w-[50%] w-[100%] gap-3 grid-cols-1 mt-3 lg:m-auto grid sm:grid-cols-2 sm:w-[100%] '>
            <div className='relative'>
                <img className='w-[100%]' src="imgs/men.jpg" alt=""/>
                <p className='font-bold text-[20px] absolute top-24 left-10'>Men’s fashion <br/> <span className='text-gray-500 font-normal text-[15px]'>358 items</span></p>
            </div>
            <div className='relative mt-3 lg:m-auto'>
                <img className='w-[100%]' src="imgs/kids.jpg" alt=""/>
                <p className='font-bold text-[20px] absolute top-24 left-10'>Kid’s fashion <br/> <span className='text-gray-500 font-normal text-[15px]'>273 items</span></p>
                {/* <p className='font-bold text-[20px] absolue top-40 right-80'><Link to='/blog'>shop now</Link><br/></p> */}
            </div>
                {/* <p>shop now</p> */}
            <div className='relative mt-3 lg:m-auto'>
                 <img className='w-[100%]' src="imgs/accessories.jpg" alt="" />
                 <p className='font-bold text-[20px] absolute top-24 left-10'>Cosmetics <br/> <span className='text-gray-500 font-normal text-[15px]'>159 items</span></p>
            </div>
            <div className='relative mt-3 lg:m-auto'>
                 <img className='w-[100%]' src="imgs/costmetics.jpg" alt="" />
                 <p className='font-bold text-[20px] absolute top-24 left-10'>Accessories <br/> <span className='text-gray-500 font-normal text-[15px]'>792 items</span></p>
            </div>
        </div>
    </div>
    
  )
}
