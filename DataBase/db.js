import mongoose from "mongoose";

export const Connection = async (username, password) =>
{
    const URL=`mongodb+srv://${username}:${password}@websitedb.toiwlq0.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL , {useUnifiedTopology:true, useNewurlParser:true});
       console.log("DataBase Is  connected Successfully")
    }
    catch(error){
        console.log("Error While Connecting to DataBase " , error.message)

    }
}

export default Connection;