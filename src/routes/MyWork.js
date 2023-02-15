import React, { useEffect, useState } from 'react'
import './MyWork.css'
import ArtWorkImages from '../ArtWorkImages'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './Footer';
import ScrollToTop from './ScrollUpButton';
import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config({path:'../../config/.env'})

// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';





//Material ui was used for the layout to structure the webpage.
//ArtWorkImages is mapped out and then item then uses the .description and .path property to display each image and title. 

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyWork = () => {

  const [myWork, setMyWork]= useState(null)

  useEffect(()=>{
    axios.get(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=samples/ArtWorkImages&max_results=100`).then((res)=>{
      const data = res.resources

      setMyWork(data)
      console.log(data)

    })
  })

  return (
    <div>
      <h1>My Art Work</h1>
     <div>
          <Box >
            <Grid container spacing={1}>
              {ArtWorkImages.map(
                (item)=>(
                  <Grid item xs={4}>
                    <Item><h2>{item.description}</h2><img src={item.path}/></Item>
                    <Item></Item>
                  </Grid>
                  )
              )}
            </Grid>
            </Box>
      </div>
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default MyWork

