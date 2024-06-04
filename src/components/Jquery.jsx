import React, { useEffect,useRef, useState, } from 'react'
import $ from 'jquery';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

export default function Jquery(prop) {

    let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


const myhide = function() {
    $('#hide').click(() => {
        $('#myp').hide();
    });
    
    $('#show').click(() => {
        $('#myp').show();
    });
}

const [increase, setincrease] = useState(0)

const increament = () => {
  setincrease (increase+1)
}

const decreament = () => {
  setincrease (increase-1)
}

const reset = () => {
  setincrease(0)
}





  return (
    <>
        <div id='mp' className='m-[50px] border-2 border-red-600'>Jquery </div>
        <p id='myp'>If you click on the "Hide" button, I will disappear.</p>

        <button id="hide" onClick={myhide} className='p-[20px] m-[10px] bg-[green]'>Hide</button>
        <button id="show" onClick={myhide} className='p-[20px] m-[10px] bg-[red]'>Show</button>

        <div className='w-[50%] bg-[red] m-[50px] mx-auto flex justify-center items-center h-[500px] flex-col text-white'>
            <div id='count'>{increase}</div>
            <div>
                <button id='dec' onClick={decreament} className='border-2 m-2 px-2'>Descrease</button>
                <button id="inc" onClick={increament} className='border-2 m-2 px-2'>Increase</button>
                <button id='res' onClick={reset} className='border-2 m-2 px-2'>Reset</button>
            </div>
        </div>

      <div className="slider-container">
        {/* <h2>Auto Play {"&"} Pause with buttons</h2> */}
        <div className='border-2  border-green-600 w-[100%] h-[500px] mx-auto'>
          <Slider ref={slider => (sliderRef = slider)} {...settings}>
              <div className='slide border-[4px] border-red-600 w-full h-[500px]'>
                  {/* <img src="imgs/product-3.jpg" className='w-[100%] h-[100%]' alt="Slide 3" /> */}
              </div>
              <div className='border-[4px] border-red-600 w-[500px] h-[500px] ' >
                  <img src="imgs/product-2.jpg" alt="Slide 2" className='w-[100%] h-[100%]' />
              </div>
              <div className='border-[4px] border-red-600 w-[500px] h-[500px]'>
                  <img src="imgs/product-1.jpg" alt="Slide 1" className='w-[100%] h-[100%]' />
              </div>
              
              
          </Slider>
        </div>
        {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={play}>
            Play
          </button>
          <button className="button" onClick={pause}>
            Pause
          </button>
        </div> */}
      </div>

    </>
  )
}
