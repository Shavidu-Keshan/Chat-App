import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Errot connecting to the MongoDb",error.massage);
    }
}

export default connectToMongoDB;