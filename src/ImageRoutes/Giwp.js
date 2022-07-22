import React from 'react'
import GiwpImage from '../ShopItemsBag/giwp.jpg'
import { Outlet, useParams } from 'react-router'


const Giwp = () => {


  return (
    <div>
      
      <img src={GiwpImage}/>
      

    </div>
  )
}

export default Giwp
