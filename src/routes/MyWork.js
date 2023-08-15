import React, { useEffect, useState } from 'react'
import './MyWork.css'
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

  const [myWork, setMyWork]= useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_MERCURYJC_URL}/My-Work-Collection`).then((res)=>{
      const imageDescription = res.data
      setMyWork(imageDescription)
      // console.log(res.data) 

    })
  },[])

  return (
    <div>
      <h1>My Art Work</h1>
     <div>
          <Box >
            <Grid container spacing={1}>
              {myWork.map(
                (item)=>(
                  <Grid item xs={4}>
                    <Item><img src={item.imageUrl}/></Item>
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

// import React, { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Footer from './Footer';
// import ScrollToTop from './ScrollUpButton';
// import axios from 'axios';

// const Item = styled(Paper)(({ theme }) => ({
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   padding: theme.spacing(2), // Add spacing around each item
// }));

// const MyWork = () => {
//   const [myWork, setMyWork] = useState([]);

//   useEffect(() => {
//     axios.get('${process.env.REACT_APP_MERCURYJC_URL}/My-Work-Collection').then((res) => {
//       const imageDescription = res.data;
//       setMyWork(imageDescription);
//     });
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', padding: '16px' }}>My Art Work</h1>
//       <Box sx={{ flexGrow: 1, p: 2 }}>
//         <Grid container spacing={2}>
//           {myWork.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item.id}>
//               <Item>
//                 <img src={item.imageUrl} alt={item.description} />
//               </Item>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <ScrollToTop />
//       <Footer />
//     </div>
//   );
// };

// export default MyWork;
