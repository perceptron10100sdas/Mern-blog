import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'
import bcryptjs from "bcrypt"

export const signup=async(req,res,next)=>
{{
 const{username,email,password}=req.body
 const hashedPassword=bcryptjs.hashSync(password,10)
 if(!username ||!email||!password||password===""||email===""||username==="")
next(errorHandler(400,"all fields are required"))
 const newUser=User({
    username,
    email,
    password:hashedPassword,
})
try {
    await newUser.save();
res.json({message:"successfully signed in"})
} catch (error) {
    next(error);
}

}}
export const signin=async(req,res,next)=>{
    const{email,password}=req.body;
try {
    const validUser=User.findOne({email})
    if(!validUser){
        return errorHandler(404,"user not found")
    }
   
   const validPassword=bcryptjs.compareSync(password,validUser.password)
   if(!validPassword){
    return errorHandler(401,"wrong Credentials ")
   }
    const token=jwt.sign({id:validUser._id},'sambhav');
    res.status(200).cookie('access_token',token,{
        httpOnly:true
    })
} catch (error) {
    next(error)
}

}

