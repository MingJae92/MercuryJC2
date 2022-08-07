import React from 'react'
import './Homepage.css'
import Carousel from 'react-material-ui-carousel'
import ArtWorkImages from '../ArtWorkImages'
import Footer from './Footer'

const Homepage = () => {
  
  return (
      <div>
         <h1>Homepage</h1>
          <Carousel>
 
            {ArtWorkImages.map((src)=>(<img className='art_work' src={src.path}/>))}
          </Carousel>
      <Footer/>
      </div>
   
  )
}

export default Homepage
