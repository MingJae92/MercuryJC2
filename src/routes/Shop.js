import React from 'react'
import './Shop.css'
import  ShopItems from "./ShopItems"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
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
                  <Grid item xs={4}>
                    <Item>
                      <h4>{item.name}</h4>
                      <img src={item.img}/>
                    </Item>

                  </Grid>
                  )
              )}
            </Grid>
            </Box>
      

    </div>
  )
}

export default Shop
