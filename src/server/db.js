import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({path:'../../config/.env'})

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

export default connectDB

