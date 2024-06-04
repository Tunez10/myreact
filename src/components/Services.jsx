import React from 'react'

export default function Services() {
  return (
    <div className='grid lg:grid-cols-4 lg:mx-[300px] mx-5 md:grid-cols-3 sm:grid-cols-2 '>
      <div className='flex my-5 '>
        <svg className=' h-10 fill-red-600 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
        <p className='font-bold text-[15px] mr-[100px] ml-4'> Free Shipping <br /><span className=' text-gray-500 font-normal text-[15px]'>For all oder over $99</span></p>
      </div>

      <div className='flex my-5'>
        <svg className='h-10 fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"/></svg>
        <p className='font-bold text-[15px] mr-[100px] ml-4'> Money Back Guarantee <br /><span className=' text-gray-500 font-normal text-[15px]'>If good have Problems</span></p>
      </div>

      <div className='flex my-5'>
        <svg className='h-10 fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
        <p  className='font-bold text-[15px] mr-[100px] ml-4'>Online Support 24/7 <br /><span className=' text-gray-500 font-normal text-[15px]'>Dedicated support</span></p>
      </div>

      <div className='flex my-5'>
        <svg className='h-10 fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
        <p  className='font-bold text-[15px] mr-[100px] ml-4'>Payment Secure <br /><span className=' text-gray-500 font-normal text-[15px]'>100% secure payment</span> </p>
      </div>

    </div>
    
      
  )
}
