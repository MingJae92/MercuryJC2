import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import Pusher from 'pusher'
import bodyParser from "body-parser"
import mongoose, { model } from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: '../../config/.env' })
import cloudinary from 'cloudinary'


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

const ShopItemBagCollectionsSchema = new mongoose.Schema(
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

const ShopItemBagCollections = mongoose.model("ShopItemBagCollections", ShopItemBagCollectionsSchema)

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

const queryInsertdataIntoDB = (queryPrefix, model) => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: queryPrefix
            })
        .then(result => {
            // console.log(result)
            if (false) {
                // next(err)
            } else  {
                console.log("processing shop item bag collection for" + queryPrefix)
                const newShopItemBagCollections = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newShopItemBagCollection = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,
                        
                        
                    }
                    newShopItemBagCollections.push(newShopItemBagCollection)
                }
                console.log("Writing image updates for " + queryPrefix)
                // console.log(newShopItemBagCollections)
                model.bulkWrite(newShopItemBagCollections.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(queryPrefix + " : " )
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

    queryInsertdataIntoDB("samples/ShopItemBag/ShopItemBagCollection", ShopItemBagCollections)
    queryInsertdataIntoDB("samples/ShopItembag/ShopItemBagPreview", ShopItemBagPreviews)
    queryInsertdataIntoDB("samples/ArtCommissionImages", CommissionImages)
    queryInsertdataIntoDB("samples/ArtWorkImages", ArtWorkImages)
    // checkCloudinaryForShopItemBagPreview();
    // checkCloudinaryForComissionsImages();
    // checkCloudinaryForImage();

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

