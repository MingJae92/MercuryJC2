import { TextField, Button, Card, CardContent, Typography, Paper, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import "./Comments.css"
import axios from 'axios';
import Pusher from "pusher-js"


//to figure out how pass a ID comments component, passing params to component

const Comments = (props) => {
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
      // lastname:"Lee",
      comment: newComment,
      shopItemId: props.shopItemId,
      votes: 0
    };
    //Axios will use a post method to post users comments.
    //Axios is a http request for a Restful API
    axios.post(`${process.env.REACT_APP_MERCURYJC_URL}/comments`, data)

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
      if(data.comment.shopItemId===props.shopItemId){
        setComments(arr => [...arr, data.comment])
      }
      
      // console.log(comments)

    })
    console.log(`${process.env.REACT_APP_MERCURYJC_URL}/comments`)
    axios.get(`${process.env.REACT_APP_MERCURYJC_URL}/comments/${props.shopItemId}`).then(({ data }) => {
      setComments(data)
    }).catch(err => console.log(err))

  }, [])
  const userComments = comments.map(item =>
    <div>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <p style={{ textAlign: "left" }}>{item.firstname}</p>
            {/* <p style={{ textAlign: "left" }}>{item.lastname}</p> */}
            <p style={{ textAlign: "left" }}>{item.comment}</p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
    </div>

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
              <section><h1>Comments</h1>{userComments}</section>
            </form>

          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Comments

// import { TextField, Button, Card, CardContent, Typography, Container, Grid, Paper, Divider, Box } from '@mui/material';
// import { useEffect, useState } from 'react';
// import "./Comments.css"
// import axios from 'axios';
// import Pusher from "pusher-js"

// const Comments = (props) => {
//   const [userName, setUserName] = useState("")
//   const [comments, setComments] = useState([])
//   const [newComment, setNewComment] = useState("")

//   const postComment = (e) => {
//     e.preventDefault();
//     if (userName.trim() === "" || newComment.trim() === "") return;
//     const data = {
//       firstname: userName,
//       comment: newComment,
//       shopItemId: props.shopItemId,
//       votes: 0
//     };
//     axios.post("${process.env.REACT_APP_MERCURYJC_URL}/comments", data)
//       .then(() => {
//         setUserName("")
//         setNewComment("")
//       })
//       .catch(error => console.log(error));
//   }

//   useEffect(() => {
//     const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
//       cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
//       encrypted: true,
//     })
//     const channel = pusher.subscribe("comments");
//     channel.bind("newComment", data => {
//       if (data.comment.shopItemId === props.shopItemId) {
//         setComments(arr => [...arr, data.comment])
//       }
//     })

//     axios.get(`${process.env.REACT_APP_MERCURYJC_URL}/comments/${props.shopItemId}`)
//       .then(({ data }) => {
//         setComments(data)
//       })
//       .catch(err => console.log(err))
//   }, [])

//   const userComments = comments.map(item => (
//     <Box mb={2}>
//       <Paper style={{ padding: "40px 20px" }}>
//         <Grid container wrap="nowrap" spacing={2}>
//           <Grid item xs zeroMinWidth>
//             <p style={{ textAlign: "left" }}>{item.firstname}</p>
//             <p style={{ textAlign: "left" }}>{item.comment}</p>
//           </Grid>
//         </Grid>
//         <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
//       </Paper>
//     </Box>
//   ));

//   return (
//     <Container maxWidth="sm">
//       <Card>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h1" align="center">
//             Feel free to make some comments!!!
//           </Typography>

//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   placeholder="Enter username"
//                   name="username"
//                   variant="outlined"
//                   value={userName}
//                   onChange={(e) => { setUserName(e.target.value) }}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="newComment"
//                   multiline
//                   rows={4}
//                   placeholder="add comment"
//                   variant="outlined"
//                   value={newComment}
//                   onChange={(e) => { setNewComment(e.target.value) }}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button onClick={postComment} variant="contained" color="primary" fullWidth>
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>

//             <Box mt={4}>
//               <Typography variant="h4" component="h2" align="center">
//                 Comments
//               </Typography>
//               {userComments}
//             </Box>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   )
// }

// export default Comments;
