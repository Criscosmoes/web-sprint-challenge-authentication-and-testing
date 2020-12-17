const User = require("../auth/user-model"); 

module.exports = async (req, res, next) => {
    try {
        const { username } = req.body; 

        const [taken] = await User.findBy({username: username}); 

        req.user = taken; 

        if(taken) return res.status(400).json("username taken"); 

        next(); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
}