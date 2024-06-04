import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    // const [Links,setLinks] = useState(['HOME', 'WOMEN\'S', 'MEN\'S', 'SHOP', 'PAGES', 'BLOG', 'CONTACT']);
    const [display, setDisplay] = useState('hidden')


    const changeDisplay = () => {
      setDisplay('block')
    }




  return (
    <header className='md:flex justify-between p-10 border-2 md:mb-3 sm:mb-[10px] w-[100%]'>
      <div className='hidden lg:inline-block '>
        <Link><img src="imgs/logo.png.webp" alt="" srcSet=''/></Link>
      </div>
      <div>
        <ul className='hidden lg:flex'>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700'><Link to='/'>Home</Link></li>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='#'>Women's</Link></li>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='#'>Men's</Link></li>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='shop'>Shop</Link></li>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='blog'>Blog</Link></li>
             <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='contact'>Contact</Link></li>

        </ul>
      </div>
      <span className=' mr24 hidden lg:flex'>
        <Link to='/login'>Login</Link>/<Link to='/register'>Register</Link>
        <svg className='h-6 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </span>

      <div onClick={changeDisplay} className='w-[50px] h-[50px] border lg:hidden'>
        <div  className={display}>
          
          <div className='z-50 absolute right-5'>
            <ul className=''>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700'><Link to='/'>Home</Link></li>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='#'>Women's</Link></li>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='#'>Men's</Link></li>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='shop'>Shop</Link></li>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='blog'>Blog</Link></li>
                <li className='ml-5 mr-5 md:border-b-2 border-red-700' ><Link to='contact'>Contact</Link></li>
            </ul>
          </div>
          <span className='hidden '>
            <Link to='#'>Login</Link>/<Link >Register</Link>
            <svg className='h-6 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </span>
        </div>

      </div>
      
        
    </header>
    
  )
}
