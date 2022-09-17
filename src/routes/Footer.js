import React from 'react'
import {AppBar, Container, Toolbar, Typography} from "@mui/material"
import{ GrInstagram }from "react-icons/gr"
import {GrTwitter} from "react-icons/gr"
import {FaTwitch} from "react-icons/fa"
import { IconContext } from "react-icons";




const Footer = () => {
  
  return (
    <div className="footer" >
        <AppBar position="sticky" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
              <IconContext.Provider  value={{ className: "shared-class", size: 40 }}>
                <GrInstagram className='instagram_icon'/>
                <GrTwitter className='twitter_icon'/>
                <FaTwitch className='twitch_icon'/>
              </IconContext.Provider>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}

export default Footer
