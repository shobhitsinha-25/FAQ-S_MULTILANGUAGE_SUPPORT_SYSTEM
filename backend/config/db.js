import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongouri=process.env.MONGO_URI || "mongodb://localhost:27017/faq_db"

const connectDB=async ()=>{
    try{
        await mongoose.connect(mongouri);
        console.log("connected successfully with the Database");
    }
    catch(error)
    {
        console.log(error);
    }
    
}

export default connectDB;