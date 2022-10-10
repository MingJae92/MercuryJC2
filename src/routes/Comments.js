import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import "./Comments.css"


const Comments = () => {
   const [comments, setComments] = useState();

   const submit = (e)=>{
    e.preventDefault();
    
   }
  return (
    <div>
      <Grid>
        <Card style={{ maxWidth: 430, padding: "0", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
            <p>Feel free to make some comments!</p>  
          </Typography> 
            
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField name="message" multiline rows={4} placeholder="Type your message here" variant="outlined"  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={submit} variant="contained" color="primary" fullWidth></Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Comments
