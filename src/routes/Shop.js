import React, { useEffect, useState } from 'react'
import './Shop.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"
import Footer from './Footer';
import ScrollToTop from './ScrollUpButton';
import axios from 'axios';


//ShopItems component stores all the images for the shop webpage.
//ShopItems component is then applied with the map method to display the shop items.
//In the route path on line 38, the link is mapping out each individual link for each image. 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Shop = () => {
const [shop, setShop] = useState([])
const [shopItems, setShopItems]= useState([])


useEffect(()=>{
  
  axios.get("http://localhost:7000/Shop/shop-items").then((res)=>{
    const shopItemBagPreviewImagesData = res.data;
    console.log(shopItemBagPreviewImagesData)
    setShop(shopItemBagPreviewImagesData)
    const shopItemsData = res.data
    setShopItems(shopItemsData)
  })
},[])
  return (
    <div>
       <h1>Shop, Etsy-Previews</h1>
       <p>These images are previews only</p>
      <Box >
            <Grid container spacing={3}>
              {shop.map(
                (item )=>(
                  <Grid item xs={4}>
                    <Item >
                      
                      
             
                   <Link to={`/Shop/${item.shop_item_url_path}`}><img src={item.image_preview}/></Link>
                      
                    </Item>
                   
                  </Grid>
                  )
              )}
            </Grid>
      </Box>
     
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default Shop


