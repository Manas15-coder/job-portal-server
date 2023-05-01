import mongoose from "mongoose"

const connectDB= async()=>{
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("successfully connected to MONGODB")
        })
    }catch(error){
        console.log(`MongoDB Error : ${error}`)
    }
}
export default connectDB