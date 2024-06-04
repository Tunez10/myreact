import React from 'react'
import { Link } from 'react-router-dom'

export default function Section() {
  return (
    <div>
        <div className='lg:mx-[20%] mx-[20px]  '>
            <div className='flex my-10'>
                <svg className='h-5 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                <Link className='font-bold' to='#'>Home  </Link>
                <p className='mx-2 text-gray-500'> Blog</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 sm:grid-cols-2 gap-3'> 
                <div>
                    <img className='w-[100%] ' src="imgs/blog-1.jpg" alt="" />
                    <p className='font-bold my-5'>No Bad Blood! The Reason Why Tamr Judge <br /> Finally Made Up With... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-7.jpg" alt="" />
                    <p className='font-bold my-5'> Pot Party! See Farrah Abraham<br /> Flaunt Smoking Body At... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-9.jpg" alt="" />
                    <p className='font-bold my-5'>CMT Awards 2019 Red Carpet Arrivals<br />Carrie Underwood, Sheryl... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                </div>
                <div>
                    <img className='w-[100%]'  src="imgs/blog-2.jpg" alt="" />
                    <p className='font-bold my-5'>Amf Cannes Red Carpet Celebrities<br /> Kendall Jenner, Pamela... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-4.jpg" alt="" />
                    <p className='font-bold my-5'>Ireland Baldwin Shows Off Trendy<br /> Ilse Valfre Tattoo At Stagecoach... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-8.jpg" alt="" />
                    <p className='font-bold my-5'> Kim Kardashian Steps Out In Paris  <br /> Wearing Shocking Sparkly...<br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-10.jpg" alt="" />
                    <p className='font-bold my-5'>A-list Battle! Angelina Jolie & Lady<br />Gaga Fighting Over Who... <br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                </div>
                <div className='mb-20'>
                    <img className='w-[100%]'  src="imgs/blog-3.jpg" alt="" />
                    <p className='font-bold my-5'>Gigi Hadid, Rita Ora, Serena & Other<br /> Hot Celebs Stun At 2019...<br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-5.jpg" alt="" />
                    <p className='font-bold my-5'>Billboard Music Awards: Best, Worst <br /> & Wackiest Dresses On The...<br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                    <img className='w-[100%]'  src="imgs/blog-6.jpg" alt="" />
                    <p className='font-bold my-5'>Stephanie Pratt Busts Out Of Teeny<br />  Black Bikini During Hawaii...<br /><span className='text-[13px] text-gray-400 font-normal'>by Ema Timahe | Seb 17, 2019</span></p>
                </div>
            </div>
            <Link className='font-bold bg-gray-100 px-10 py-3 rounded-[50px] lg:mx-[30%] md:mx-[250px] mx-[50px]'  to='#'>LOAD MORE POSTS</Link>

        
        </div>

    </div>
   
  )
}
