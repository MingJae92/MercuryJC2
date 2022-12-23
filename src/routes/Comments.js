import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./Comments.css"
import axios from 'axios';
import Pusher from "pusher-js"
import dotenv from "dotenv"
dotenv.config({path:'../../config/.env'})


const Comments = () => {
  const [userName, setUserName] = useState("")
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  const postComment = (e) => {
    e.preventDefault();
    //User message will be checked if object is a string.
    if (userName.trim() === "" || newComment.trim() === "") return;
    //Users info stored in data object.
    const data = {
      firstname: userName,
      lastname:"Lee",
      comment: newComment,
      votes: 0
    };
    //Axios will use a post method to post users comments.
    //Axios is a http request for a Restful API
    axios.post("http://localhost:7000/comment", data)

      .then(() => {
        setUserName("")
        setNewComment("")
      })
      .catch(error => console.log(error));
  }
  //Comments will be displayed live once users message has been posted to the server and connectec with Pusher server.
  //Pusher will then access the env file for Pusher to connect to server.
  //Pusher will then subscribe to the channel
  //App and cluster key will be running from env file
  //
  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
      cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
      encrypted: true,
    })
    const channel = pusher.subscribe("comments");
    channel.bind("newComment", data => {
      setComments(arr=> [...arr, data.comment])
      console.log(comments)
    
    })

      axios.get("http://localhost:7000",).then(({ data }) => {
        setComments(data)
      }).catch(err => console.log(err))
  }, [])
  const userComments = comments.map(item=>
   <div><p>{item.comment}</p>
   <p>{item.firstname}</p>
   <p>{item.lastname}</p></div>

  )

  return (
    <div>
      <Grid >
        <Card style={{ maxWidth: 430, padding: "0", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              <p>Feel free to make some comments!!!</p>
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter username" name="username" variant="outlined" value={userName} onChange={(e) => { setUserName(e.target.value) }} fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField name="comment" multiline rows={4} placeholder="Comment here" variant="outlined" value={comments} onChange={(e) => { setComments(e.target.value) }} style={{ padding: "0.5em" }} fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField name="newComment" multiline rows={4} placeholder="add comment" variant="outlined" value={newComment} onChange={(e) => { setNewComment(e.target.value) }} style={{ padding: "0.5em" }} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={postComment} style={{ height: "5vh" }} variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
              <section>{userComments}</section>
            </form>
            
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Comments
