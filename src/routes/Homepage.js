import React from 'react'
import './Homepage.css'
import Carousel from 'react-material-ui-carousel'
import ArtWorkImages from '../ArtWorkImages'
import Footer from './Footer'

//Carousel is a React material ui package used to display images from ArtWorkImages component.
//ArtWorkImages component is then mapped to display all the images. The src is used to indentify the title of each image. 

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
