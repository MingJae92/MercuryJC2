import React from 'react'
import GiwpImage from '../ShopItemsBag/giwp.jpg'
import { Outlet, useParams } from 'react-router'


const Giwp = () => {
  // const params = useParams();
  return (
    <div>
      <h1>A5-Genshin-Impact-Weekly-Planner</h1>
      <img src={GiwpImage}/>
      

    </div>
  )
}

export default Giwp
