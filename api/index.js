import express from "express"
import mongoose from "mongoose"
import userrouter from "./Routes/user.routes.js"
 import authrouter from "./Routes/auth.routes.js"
const app=express()
app.use(express.json())
mongoose.connect("mongodb+srv://Sambhav:dassambhav@cluster0.x1llosl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{console.log("mongodb is connected")
}).catch((err)=>{console.log(err)})

app.listen(3000,()=>
{console.log("Server running successfully ")})


app.use('/api/user',userrouter)
app.use('/api/auth',authrouter)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})