import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./Comments.css"
import axios from 'axios';
import Pusher from "pusher-js"

const Comments = () => {
  const [userName, setUserName]=useState("")
  const [comments, setComments]=useState("")
  const [newComments, setNewComments]=useState("")

  const postComment = (e)=>{
    e.preventDefault();
//User message will be checked if object is a string.
    if(userName.trim()==="" || newComments.trim()==="") return;
//Users info stored in data object.
    const data ={
      name:userName,
      text: newComments,
      votes: 0
    };
    //Axios will use a post method to post users comments.
    //Axios is a http request for a Restful API
    axios.post("http://localhost:5000/comment", data)
    console.log(data)
      .then(()=>{
        setUserName("")
        setComments("")
      })
      .catch(error => console.log(error));
  }
  //Comments will be displayed live once users message has been posted to the server and connectec with Pusher server.
  //Pusher will then access the env file for Pusher to connect to server.
  //Pusher will then subscribe to the channel
  //App and cluster key will be running from env file
    useEffect(()=>{
      const pusher = new Pusher("process.env.PUSHER_APP_KEY", {
        cluster:"process.env.PUSHER_APP_CLUSTER",
        encrypted: true,
      })
      const channel = pusher.subscribe("comments");
        channel.bind("new-comment", data=>{
          setNewComments(comments.push(data.comment))
        })
        return comments,
      axios.get("http://localhost:5000",).then(({data})=>{
        setComments(...data)
      }).catch(err=>console.log(err))
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
                    <TextField name="comment" multiline rows={4} placeholder="Comment here" variant="outlined" value={comments} onChange={(e)=>{setComments(e.target.value)}} style={{padding:"0.5em"}} fullWidth required />
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
