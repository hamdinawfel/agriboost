require('dotenv').config()
exports.verifyTime = (req, res, next) => {
    if(Date.now() < process.env.REACT_START_TIME) {
       return next()
    }
    else{
        return res.status(403).json({ error:"final submission deadline"});
    }
}