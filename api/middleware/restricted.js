const jwt = require("jsonwebtoken"); 
const dotenv = require("dotenv");

dotenv.config(); 

module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization; 

    if(!token) return res.status(400).json("token required"); 

    const verify = jwt.verify(token, process.env.JWT_SECRET); 

    if(verify){
      next(); 
    }
    else {
      res.status(401).json("token invalid"); 
    }


  }catch(e){
    res.status(500).json("token invalid"); 
  }

  
};


/*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */