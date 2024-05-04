require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await knex("users")
    .where({ user_name: username })
    .first();
    console.log(user);

    if(!user) {
        return res.status(401).json({
            message: 'combination of username/password is not found',
        });
    }
    const isPasswordMatching = user.user_password === password;

    if(!isPasswordMatching) {
        return res.status(401).json({
            message: 'combination of username/password is not found',
        });
    }
     // install jsonwebtoken library
     const token = jwt.sign({
        id: user.id
    }, process.env.SECRET_KEY);

    res.status(200).json({
        access_token: token,
    });


};

module.exports = {
    login
    }