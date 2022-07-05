import React from 'react'
import './MyWork.css'
import ArtWorkImages from '../ArtWorkImages'
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

const MyWork = () => {
  return (
    <div>
     <div>
          <Box >
            <Grid container spacing={1}>
              {ArtWorkImages.map(
                (item)=>(
                  <Grid item xs={4}>
                    <Item><h2>{item.description}</h2><img src={item.path}/></Item>
                    <Link path to=""></Link>
                  </Grid>
                  )
              )}
            </Grid>
            </Box>
      </div>
    </div>
  )
}

export default MyWork

