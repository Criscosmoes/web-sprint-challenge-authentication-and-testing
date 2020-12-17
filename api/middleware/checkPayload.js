module.exports = async (req, res, next) => {

    try {
        const { username, password } = req.body; 

        if(!username || !password) return res.status(400).json("username and password required"); 


        next(); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
}