import React, { useEffect, useState } from 'react'
import './Commissions.css'
import Pardofelis from "../ArtCommissionImages/Illustrationfullcolour/Bust/Pardofelis.jpg"
import YaeMiko from "../ArtCommissionImages/Illustrationfullcolour/Bust/YaeMiko.jpg"
import MonarchMona from "../ArtCommissionImages/Illustrationfullcolour/Waist-Up/MonarchMona.jpg"
import PoroKingxMatty from "../ArtCommissionImages/Illustrationfullcolour/Waist-Up/PoroKingxMatty.jpeg"
import PorcelainGanyu from "../ArtCommissionImages/Illustrationfullcolour/Full-Body/PorcelainGanyu.png"
import StarchasmHutao from "../ArtCommissionImages/Illustrationfullcolour/Full-Body/StarchasmHutao.jpg"
import Headshot1 from "../ArtCommissionImages/Illustrationsimplecolour/headshot.jpeg"
import Waistup1 from "../ArtCommissionImages/Illustrationsimplecolour/waistup.jpeg"
import Headshot2 from "../ArtCommissionImages/Chibi/headshot.png"
import Fullbody from "../ArtCommissionImages/Chibi/fullbody.png"
import Emotes from "../ArtCommissionImages/Emotebadges/emotes.jpeg"
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
