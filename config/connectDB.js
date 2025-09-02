import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
          console.log(`connected to database ${mongoose.connection.host}`)
    } catch (error) {
        console.log("Database error ::",error)
    }
}
export default connectDb;