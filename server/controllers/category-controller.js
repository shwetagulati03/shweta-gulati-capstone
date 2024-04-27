const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    console.log("before try");
    try{
        const data= await knex("category");
        res.status(200).json(data);

    }
    catch(error){
        res.status(400).send(`Error retrieving Categories: ${error}`);
    }
}

module.exports = {
	index
}