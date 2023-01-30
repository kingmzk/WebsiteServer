import User from "../models/user-schema.js";


export const userSignup = async(request, response) =>
{
  try{


    console.log("it is working");
     console.log(request.body);
     const user = request.body;

      const newUser = new User(user);
      await newUser.save();

      response.status(200).json({message:user});

  }
  catch(error)
  {
    response.status(500).json({message:error.message});
    console.log("Error while getting request body",error.message)
  }
}