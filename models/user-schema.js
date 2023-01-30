import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     firstname:{
        type: String,
        required:true,
        trim:true,
     },
     lastname:{
        type: String,
        required:true,
        trim:true,
     },
     email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
     },
     phonenumber:{
        type: String,
        required:true,
        trim:true,
        
     },
     comment:{
        type: String,
        required:true,
        trim:true,
     },
});

const user = mongoose.model('user', userSchema);
export default user;