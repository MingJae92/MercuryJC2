import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express();

const route = express.Router();
const port = process.env.PORT || 5000;

// app.post("/", (req, res)=>{
//     console.log(req.body)
//     // const transporter = nodemailer.createTransport({
//     //     service:"gmail",
//     //     auth:{
//     //         user:"",
//     //         pass:""
//     //     },
//     // });

//     // const mailOptions = {
//     //     from: req.body.email,
//     //     to: "mingchi1992@gmail.com",
//     //     subject:`Message from ${req.body.email}: ${req.body.subject}`,
//     //     text: req.body.message
//     // }

//     transporter.sendMail(mailOptions, (error, info)=>{
//         if(error){
//             console.log(error)
//             res.send(error)
//         }else{
//             console.log("Email sent:" + info.response)
//             res.send("success")
//         }
//     })

// })



// // contactEmail.verify((error)=>{
// //     if(error){
// //         console.log(error)
// //     }else{
// //         console.log("Ready to send")
// //     }ˆ
// // })

app.use(cors());
app.use(express.json())

app.get("/server", (req, res)=>{
    res.send("Welcome to my server guys!!!")
})

app.use("/v1", route);

app.listen(port, ()=>{
    console.log(`Listening on port ${port} here we go!`);
})

const contactEmail =nodemailer.createTransport({
    host:"gmail",
    port:465,
    secure:true,
    auth:{
    user:"",
    pass:"",
    },
});

contactEmail.verify((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Ready to send!")
    }
})

route.post("/contact", (req, res)=>{
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
    contactEmail.sendMail(mail, (error)=>{
        if(error){
            res.json({status:"ERROR"});
        }else{
            res.json({status:"Message sent"});
        }
    });
});
