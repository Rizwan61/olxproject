const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const postRouter = require("./routes/PostRoutes")

dotenv.config();
// middle ware

app.use(express.json());
app.use(cors());


// routes
// app.use("/user", userRouter);
app.use("/post", postRouter);




const StartServer = async ()=>{
    mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
        app.listen(4002 ,()=>{
            console.log("Server Is Working");
        })
        
    })
}
StartServer();