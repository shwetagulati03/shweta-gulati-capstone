require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenVerify = (req, res, next) => {
    // validate the token
    //extracting the token from the headers
    const { authorization } = req.headers;
console.log("auth"+authorization);
    if (!authorization) {
        return res.status(401).send('Unauthenticated');
    }

    //verify the token
    const token = authorization.split(' ')[1];
    console.log("token:"+ token);

    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log(payload);

        //if it is valuid, call next(), passing the payload through
        // the role lookup potentially
        req.userObj = payload;

        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("Invalid token");
    }
}



module.exports = {
    tokenVerify
};