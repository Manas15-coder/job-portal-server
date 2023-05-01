import mongoose, { Schema } from "mongoose";

import validator from "validator";

const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Company name is required']
    },
    position:{
        type:String,
        required:true
    },
    workLocation:{
        type:String,
        default:'Noida',
        required:true
    },
    workType:{
        type:String,
        default:'Remote'
    }

} ,{timestamps:true})

export default mongoose.model('Job',jobSchema)