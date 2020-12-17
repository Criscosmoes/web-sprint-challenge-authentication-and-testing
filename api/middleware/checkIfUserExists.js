
const User = require("../auth/user-model");

module.exports = async (req, res, next) => {

    try {
        const { username } = req.body; 

        const [exists] = await User.findBy({username: username}); 

        if(exists) {
            req.user = exists; 
            return next(); 
        }

        return res.status(400).json("invalid credentials"); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }


}