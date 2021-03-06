import React from 'react'
import './Homepage.css'
import Carousel from 'react-material-ui-carousel'
import ArtWorkImages from '../ArtWorkImages'

const Homepage = () => {
  
  return (
      <div>
         <h1>Homepage</h1>
          <Carousel>
 
            {ArtWorkImages.map((src)=>(<img className='art_work' src={src.path}/>))}
          </Carousel>

      </div>
   
  )
}

export default Homepage
