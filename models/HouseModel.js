import {mongoose, model} from "mongoose";

const houseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    noOfGuests:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        
    },
   
    roomType:{
        type:String,
        required:true
    },


   
})

const House = mongoose.model("House", houseSchema)

module.exports = House