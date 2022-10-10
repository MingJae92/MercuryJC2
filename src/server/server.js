import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express();
console.log(process.env);

const route = express.Router();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

app.get("/server", (req, res)=>{
    res.send("Welcome to my server guys!!!")
})

app.use("/v1", route);

app.listen(port, ()=>{
    console.log(`Listening on port ${port} here we go!`);
})
//While the response is being sent through to the API, nodemailer will create an SMTP connection to the nodemailer server.
const contactEmail =nodemailer.createTransport({
    service:"gmail",
    
    auth:{
    user:"process.env.USER",
    pass:"process.env.PASS",
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
        to:"mingchi1992wong@gmail.com",
        html:`<p>Name:${name}</p>
              <p>Name:${email}</p>
              <p>Name:${message}</p>`,
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
