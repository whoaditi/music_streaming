import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name:{type:String,requried:true},
    desc:{type:String,requried:true},
    bgColor:{type:String,requried:true},
    image:{type:String,requried:true},
})

const albumModel = mongoose.model.album || mongoose.model("album",albumSchema);

export default albumModel;