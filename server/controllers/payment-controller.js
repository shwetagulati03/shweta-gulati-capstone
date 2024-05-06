require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

const pay = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'cad',
        });
        res.json({ clientSecret: paymentIntent.client_secret });
        } 
    catch (error) {
        res.status(500).json({ error: error.message });
        }
}

module.exports = {
    pay
    }