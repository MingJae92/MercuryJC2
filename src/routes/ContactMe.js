import React, { useState } from 'react'
import "./ContactMe.css"
import Grid from '@mui/material/Grid';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import "./Footer.css"
import Footer from './Footer';

const ContactMe = () => {

const [status, setStatus] = useState("Submit")
const handleSubmit =async(e)=>{
  e.preventDefault();
  setStatus("Send")

  const {name, email, message} = e.target.elements;
  let details = {
    name:name.value,
    email:email.value,
    message:message.value,
  }

  let response = await fetch("http://localhost:5000", {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(details)
  });
  setStatus("Submit");
  let result = await response.json();
  alert(result)
}

  return (
    <div>
      <h1>Contact Me</h1>
      <Typography gutterBottom variant="h3" align="center">
       
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            <p>Fill up the form and our team will get back to you within 24 hours.</p>  
          </Typography> 
            <form onSubmit={handleSubmit} method="POST">
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type={"submit"} variant="contained" color="primary" fullWidth>{status}</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Footer/>
    </div>
  )
}

export default ContactMe
