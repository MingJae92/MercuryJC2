import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./Comments.css"
import axios from 'axios';

const Comments = () => {
  const [userName, setUserName]=useState("")
  const [comment, setComment]=useState([])
  const [newComments, setNewComments]=useState("")


  const postComment = (e)=>{
    e.preventDefault();

    if(userName.trim()==="" || newComments.trim()==="") return;
    const data ={
      name:userName,
      text: newComments,
      votes: 0
    };
    axios.post("http://localhost:5000/comment", data)
    console.log(data)
      .then(()=>{
        setUserName("")
        setComment("")
      })
      .catch(error => console.log(error));
  }
    useEffect(()=>{

      
    },[])

  
  return (
    <div>
      <Grid >
        <Card style={{ maxWidth: 430, padding: "0", margin: "0 auto" }}>
          <CardContent>
            <Typography  gutterBottom variant="h5">
            <p>Feel free to make some comments!!!</p>  
          </Typography> 
            
            <form onSubmit={postComment}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter username" name="username" variant="outlined" value={userName} onChange={(e)=>{setUserName(e.target.value)}} fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="comment" multiline rows={4} placeholder="Comment here" variant="outlined" value={comment} onChange={(e)=>{setComment(e.target.value)}} style={{padding:"0.5em"}} fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="newComment" multiline rows={4} placeholder="" variant="outlined" value={newComments} onChange={(e)=>{setNewComments(e.target.value)}} style={{padding:"0.5em"}} fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button style={{height: "5vh"}}  variant="contained" color="primary" fullWidth>Submit</Button>
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
