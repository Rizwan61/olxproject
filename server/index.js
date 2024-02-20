const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


const postRouter = require("./routes/PostRoutes");
dotenv.config();
// middle ware

app.use(express.json());
app.use(cors());


// routes

app.use("/post", postRouter);





const StartServer = async ()=>{
    mongoose.connect("mongodb://localhost:27017/olxbd").then(()=>{
        app.listen(4001 ,()=>{
            console.log("Server Is Working");
        })
        
    })
}
StartServer();