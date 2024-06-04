import React from 'react'
import { Link } from 'react-router-dom'
import Contactinfo from '../componentC/Contactinfo'
import Form from '../componentC/Form'
import Stagram from '../components/Stagram'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
        <div  className='flex'>
          <div className='contact lg:px-[20%] mx-5'>
            <div>
                <div className='flex my-10'>
                    <svg className='h-5 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    <Link className='font-bold' to='#'>Home</Link>
                    <p className='mx-2 text-gray-500'> Blog</p>
                </div>
            </div>
            <Contactinfo/>
            <Form/>
          </div>

          <div className='mr-40 mt-40' >
            <iframe className='h-[700px] w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.082881147734!2d3.9051664758654887!3d7.456083111622284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed8218539e5f%3A0x4eecc1bbc83e74a3!2sParach%20Computers%20(%20ICT%20Training%20Centre%2C%20Orogun%2C%20Ibadan)!5e0!3m2!1sen!2sng!4v1717421722598!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.082881147734!2d3.9051664758654887!3d7.456083111622284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed8218539e5f%3A0x4eecc1bbc83e74a3!2sParach%20Computers%20(%20ICT%20Training%20Centre%2C%20Orogun%2C%20Ibadan)!5e0!3m2!1sen!2sng!4v1717421722598!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>

        </div>
        


        
        <Stagram/>
        <Footer/>
    </div>
    
  )
}
