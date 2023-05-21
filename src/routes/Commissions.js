import React, { useEffect, useState } from 'react'
import './Commissions.css'
import Footer from './Footer'
import ScrollToTop from './ScrollUpButton'
import axios from 'axios'

const Commissions = () => {
  const [commissionsImages, setCommissionImages] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:7000/commissions-images").then((res)=>{
      const commissionsData = res.data;
      console.log(commissionsData)
      setCommissionImages(commissionsData)
    })
  }, [])
  return (
    <div className='illustrations'>
      <h1>Commissions</h1>
      <p>These are just previews only of my commissions.</p>
      {commissionsImages.map((item)=>(<img src={item.imageUrl} />))}
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default Commissions
