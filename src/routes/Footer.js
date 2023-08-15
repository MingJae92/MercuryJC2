import React from 'react'
import {AppBar, Container, Toolbar, Typography} from "@mui/material"
// import{ GrInstagram }from "react-icons/gr"
// import {GrTwitter} from "react-icons/gr"
// import {FaTwitch} from "react-icons/fa"
// import { IconContext } from "react-icons";

const Footer = () => {
  
  return (
    <div className="footer" >
        <AppBar position="sticky" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" component="p">
              &copy; {new Date().getFullYear()} MercuryJC. All rights reserved.
              {/* <IconContext.Provider  value={{ className: "shared-class", size: 40 }}>
                <GrInstagram className='instagram_icon'/>
                <GrTwitter className='twitter_icon'/>
                <FaTwitch className='twitch_icon'/>
              </IconContext.Provider> */}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}

export default Footer

// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//   },
// }));

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       <Typography variant="body1" component="p">
//         &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
//       </Typography>
//     </footer>
//   );
// };

// export default Footer;
