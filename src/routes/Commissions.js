import React, { useEffect, useState } from 'react'
import './Commissions.css'
import Footer from './Footer'
import ScrollToTop from './ScrollUpButton'
import axios from 'axios'

const Commissions = () => {
  const [commissionsImages, setCommissionImages] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_MERCURYJC_URL}/commissions-images`).then((res)=>{
      const commissionsData = res.data;
      console.log(commissionsData)
      setCommissionImages(commissionsData)
    })
  }, [])
  return (
    <div className='illustrations'>
      <h1>Commissions</h1>
      <p>These are just previews only of my commissions.</p>
      {commissionsImages.map((item)=>(<img src={item.imageUrl} />))}
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default Commissions

// import React, { useEffect, useState } from 'react'
// import { Grid, Typography } from '@mui/material'
// import { makeStyles } from '@mui/material/styles'
// import axios from 'axios'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   image: {
//     width: '100%',
//     maxWidth: 400,
//     height: 'auto',
//   },
// }))

// const Commissions = () => {
//   const classes = useStyles()
//   const [commissionsImages, setCommissionImages] = useState([])

//   useEffect(() => {
//     axios.get("${process.env.REACT_APP_MERCURYJC_URL}/commissions-images").then((res) => {
//       const commissionsData = res.data
//       setCommissionImages(commissionsData)
//     })
//   }, [])

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Typography variant="h4" component="h1" className={classes.title}>
//           Commissions
//         </Typography>
//         <Typography variant="body1" component="p">
//           These are just previews only of my commissions.
//         </Typography>
//       </Grid>
//       {commissionsImages.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <img src={item.imageUrl} alt={`Commission ${index + 1}`} className={classes.image} />
//         </Grid>
//       ))}
//     </Grid>
//   )
// }

// export default Commissions
