const mongoose=require("mongoose")

const savedSchema=new mongoose.Schema({
    guest:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    savedProperty:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
})

module.exports=mongoose.model("Saved",savedSchema)