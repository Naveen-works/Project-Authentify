
import express  from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const app =express();


app.get('/',(req,res)=>
{
    res.send("Hey parker")
})
app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000")
})