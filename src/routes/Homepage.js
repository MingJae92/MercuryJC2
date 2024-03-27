import React, { useEffect, useState } from 'react'
import './Homepage.css'
import { Typography } from '@mui/material';
import  Carousel  from 'react-material-ui-carousel';
import Footer from './Footer'
import axios from 'axios'

//Carousel is a React material ui package used to display images from ArtWorkImages component.
//ArtWorkImages component is then mapped to display all the images. The src is used to indentify the title of each image. 

const Homepage = () => {
  const [homepage, setHomepage] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MERCURYJC_URL}/My-Work-Collection`).then((res) => {
      const homepageWorkCollectionData = res.data
      console.log(homepageWorkCollectionData)
      setHomepage(homepageWorkCollectionData)
    })
  }, [])
  return (
    <div>
      <h1>Homepage!!!</h1>

      <Carousel>
        {homepage.map((item, index) => (
          <img key={index} className="art_work" src={item.imageUrl} alt={`Artwork ${index}`} />
        ))}
      </Carousel>
      <Footer />
    </div>

  )
}

export default Homepage