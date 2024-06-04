import React from 'react'
import Showinfo from '../components/Showinfo'
import Newproduct from '../components/Newproduct'
import Carousel from '../components/Carousel'
import List from '../components/List'
import Discount from '../components/Discount'
import Services from '../components/Services'
import Stagram from '../components/Stagram'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Showinfo/>
      <Newproduct/>
      <Carousel/>
      <List/>
      <Discount/>
      <Services/>
      <Stagram/>
      <Footer/>

    </div>
  )
}
