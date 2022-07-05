import React from 'react'
import './Shop.css'
import  ShopItems from "./ShopItems"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Shop = () => {
  return (
    <div>
      <Box >
            <Grid container spacing={1}>
              {ShopItems.map(
                (item)=>(
                  <Grid item xs={3}>
                    <Item><h2>{item.name}</h2><img src={item.img}/></Item>
                   
                  </Grid>
                  )
              )}
            </Grid>
            </Box>
      

    </div>
  )
}

export default Shop
