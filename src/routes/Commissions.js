import React from 'react'
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

const Commissions = () => {
  return (
    <div className='illustrations'>
      <h1>Commissions</h1>
      <p>These are just previews only of my commissions.</p>
      <h1>ILLUSTRATION(FULL-COLOUR)</h1>
        <h5>BUST</h5>
          <img src={Pardofelis}/>
          <img src={YaeMiko}/>
        <h5>WAIST-UP</h5>
          <img src={MonarchMona}/>
          <img src={PoroKingxMatty}/>
        <h5>FULL-BODY</h5>
          <img src={PorcelainGanyu}/>
          <img src={StarchasmHutao}/>
      <h1>ILLUSTRATION(SIMPLE-COLOUR)</h1>
        <h5>HEADSHOT</h5>
          <img src={Headshot1}/>
        <h5>WAIST-UP</h5>
        <img src={Waistup1}/>
      <h1>CHIBI</h1>
        <h5>HEADSHOT</h5>
          <img src={Headshot2}/>
        <h5>FULL-BODY</h5>
          <img src={Fullbody}/>
      <h1>EMOTES</h1>
        <h5>STREAM EMOTES</h5>
        <img src={Emotes}/>
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default Commissions
