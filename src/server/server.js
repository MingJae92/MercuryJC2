import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import Pusher from 'pusher'
import bodyParser from "body-parser"
import mongoose, { model } from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: '../../config/.env' })
import cloudinary from 'cloudinary'
import { Description } from "@mui/icons-material"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const ArtWorkImagesSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)

const ArtWorkImages = mongoose.model("ArtWorkImages", ArtWorkImagesSchema)

const checkCloudinaryForImage = () => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: 'samples/ArtWorkImages'
            })
        .then(result => {
            console.log(result)
            if (false) {
                // next(err)
            } else  {
                
                const newArtWorkImages = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newArtWorkImage = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,
                        
                    }
                    newArtWorkImages.push(newArtWorkImage)
                }
                console.log("Writing image updates")
                console.log(newArtWorkImages)
                ArtWorkImages.bulkWrite(newArtWorkImages.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(updateResponse)
                    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
                })
            }
            
        });
}



const CommissionImagesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    }
       
})

const CommissionImages = mongoose.model("Commissionimages", CommissionImagesSchema)

const checkCloudinaryForComissionsImages = () => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: 'samples/ArtCommissionImages'
            })
        .then(result => {
            console.log(result)
            if (false) {
                // next(err)
            } else  {
                
                const newCommissionImages = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newCommissionImage = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,
                        publicIDName:resultArray[i].public_id,
                        
                    }
                    newCommissionImages.push(newCommissionImage)
                }
                console.log("Writing image updates")
                console.log(newCommissionImages)
                CommissionImages.bulkWrite(newCommissionImages.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(updateResponse)
                    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
                })
            }
            
        });
}

const ShopItemBagSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)

const ShopItemBags = mongoose.model("ShopItemBags", ShopItemBagSchema)

const checkCloudinaryForShopItemBag = () => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: 'samples/ShopItemBag'
            })
        .then(result => {
            console.log(result)
            if (false) {
                // next(err)
            } else  {
                
                const newShopItemBags = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newShopItemBag = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,
                        publicIDName:resultArray[i].public_id,
                        
                    }
                    newShopItemBags.push(newShopItemBag)
                }
                console.log("Writing image updates")
                console.log(newShopItemBags)
                ShopItemBags.bulkWrite(newShopItemBags.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(updateResponse)
                    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
                })
            }
            
        });
}

const ShopItemBagPreviewSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)

const ShopItemBagPreviews = mongoose.model("ShopItemBagPreviews", ShopItemBagPreviewSchema)

const checkCloudinaryForShopItemBagPreview = () => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: 'samples/ShopItembag/ShopItemBagPreview'
            })
        .then(result => {
            console.log(result)
            if (false) {
                // next(err)
            } else  {
                
                const newShopItemBagPreviews = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newShopItemBagPreview = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,
                        publicIDName:resultArray[i].public_id,
                        
                    }
                    newShopItemBagPreviews.push(newShopItemBagPreview)
                }
                console.log("Writing image updates")
                console.log(newShopItemBagPreviews)
                ShopItemBagPreviews.bulkWrite(newShopItemBagPreviews.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(updateResponse)
                    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
                })
            }
            
        });
}






const app = express();
const databaseURL = process.env.MONGO_URL

const connectDB = async () => {
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
    mongoose.connection.on('error', err => {
        console.log(err);
    });
    checkCloudinaryForShopItemBagPreview()
    checkCloudinaryForShopItemBag()
    checkCloudinaryForComissionsImages();
    checkCloudinaryForImage();

}

const route = express.Router();
const port = process.env.APISERVERPORT

connectDB()
const schema = new mongoose.Schema({ firstname: 'string', comment: 'string' });
const Comments = mongoose.model('Comments', schema);

// Comments.create({ firstname: 'Legend', lastname:'Lee', comment:'Hello' }, function (err, small) {
//     if (err) 
//     console.log(err)
//     // saved!
//   });

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/comments", (req, res) => {
    Comments.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
    })
})

app.post("/comments", (req, res) => {
    console.log(JSON.stringify(req.body))
    Comments.create({ firstname: req.body.firstname, comment: req.body.comment }, function (err, newComment) {
        console.log(JSON.stringify(err))
        console.log(JSON.stringify(newComment))
        if (err) {
            return res.status(500).send(err);
        }
        pusher.trigger("comments", "newComment", {
            comment: newComment,
        }).then(res.status(200).send("OK"))

    })
})

app.get("/My-Work-Collection", (req, res)=>{
    ArtWorkImages.find({}, (err, data)=>{
        if(err) return res.status(500).send(err);
        res.json(data)
        console.log(data)
    })
})

app.get("/commissions-images", (req, res)=>{
    CommissionImages.find({}, (err, data)=>{
        if(err) return res.status(500).send(err);
        res.json(data)
        console.log(data)
    })
})

app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
});

//   pusher.trigger("my-channel", "my-event", {
//     message: "hello world"
//   });
//While the response is being sent through to the API, nodemailer will create an SMTP connection to the nodemailer server.
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS

    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to send!")
    }
})
//Once user has sent off thier details the API then receives a request.
//All the users details is then stored in the mail variable ready to be displayed as HTML in the artists inbox. 
app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "drloveiscrazy@gmail.com",
        html: `<p>${email}</p>
              <p>${name}</p>
              <p>${message}</p>`,
    };
    console.log(mail)
    //If mail is successfully sent a status will be shown in the console with an "ERROR" else it would display a message saying "Message sent".
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message sent" });
        }
    });
});






