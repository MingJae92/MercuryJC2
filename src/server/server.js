import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import Pusher from 'pusher'
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config({path:'../../config/.env'})


const app = express();
const databaseURL = process.env.MONGO_URL

const connectDB= async()=>{
    try {
         mongoose.connect(databaseURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Database connected');
      } catch (err) {
        console.log(err);
        process.exit(1);
      }
      
}

const route = express.Router();
const port = process.env.PORT 
connectDB()

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    mongoose.find({}, (err, data)=>{
        if(err) return res.status(500).send(err);
        res.json(data)
    })
})

app.post("/comment", (res, req)=>{
    mongoose.insert(Object.assign({}, req.body), (err, newComment)=>{
        if(err){
            return res.status(500).send(err);
        }
        pusher.trigger("comment", "newComment", {
            comment: newComment,
        });
        res.status(200).send("OK")
    })
})

app.use("/v1", route);

app.listen(port, ()=>{
    console.log(`Listening on port ${port} here we go!`);
})

const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER,
      useTLS: true,
  });

  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
//While the response is being sent through to the API, nodemailer will create an SMTP connection to the nodemailer server.
const contactEmail =nodemailer.createTransport({
    service:"gmail",
    auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
    
    },
});


contactEmail.verify((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Ready to send!")
    }
})
//Once user has sent off thier details the API then receives a request.
//All the users details is then stored in the mail variable ready to be displayed as HTML in the artists inbox. 
app.post("/contact", (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail ={
        from: name,
        to:"drloveiscrazy@gmail.com",
        html:`<p>${email}</p>
              <p>${name}</p>
              <p>${message}</p>`,
    };
    console.log(mail)
    //If mail is successfully sent a status will be shown in the console with an "ERROR" else it would display a message saying "Message sent".
    contactEmail.sendMail(mail, (error)=>{
        if(error){
            res.json({status:"ERROR"});
        }else{
            res.json({status:"Message sent"});
        }
    });
});


