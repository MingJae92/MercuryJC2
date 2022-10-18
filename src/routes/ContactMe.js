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
// firstname, lastname, email and message values are assigned with e.target.elements.
  const {firstname, lastname, email, message} = e.target.elements;
//details object will store all the values from the form once the user has filled out the form. 
  let details = {
    name:firstname.value+lastname.value,
    email:email.value,
    message:message.value,
  }

  console.log(details)
//response will then fetch the data from the API which is http://localhost:5000/contact. 
  let response = await fetch("http://localhost:5000/contact", {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(details)
  });
  setStatus("Submit");
//Once users has submitted their detail the API will then respond to the request. 
//result variable will then wait for a response from the API.
  let result = await response.json();
  alert(result)
//console.log will then show us the whether the users info was passed onto the API.
  console.log(result)
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
                  <TextField placeholder="Enter first name" name="firstname" variant="outlined" fullWidth required />

                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" name="lastname" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" name="email" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" name="phone" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="message" multiline rows={4} placeholder="Type your message here" variant="outlined"  fullWidth required />
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
