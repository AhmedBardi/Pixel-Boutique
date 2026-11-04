const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        require:true,
    },
    imageProd:{
        type:String,
    },
    //Pour faire la relation entre la collection User et Product 
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{timestamps:true})

const Product=mongoose.model("product", productSchema)
module.exports=Product