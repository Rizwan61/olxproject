var jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();


const generateToken  = (user) => {
     console.log("merge",user._id)

     // create json web token
     const token = jwt.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'2h'});
     return token;
}

module.exports = {generateToken};