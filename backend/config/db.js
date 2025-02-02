import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected successfully with the Database");
    }
    catch(error)
    {
        console.log(error);
    }
    
}

export default connectDB;