import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import { app ,server } from "./lib/socket.js";


dotenv.config()
import { connectDB } from "./lib/db.js";


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));  // used abouve 2 line for increasing the size of image that can be uploaded 


//app.use(express.json());  // limiting the size of the image 
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173",credentials:true}));
const PORT=process.env.PORT


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

server.listen(PORT,()=>{
    console.log("server is running on port ",PORT);
    connectDB()
})