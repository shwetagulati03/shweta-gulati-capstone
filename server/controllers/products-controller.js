const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    console.log("before try");
    try{
        const data= await knex("products");
        res.status(200).json(data);

    }
    catch(error){
        res.status(400).send(`Error retrieving Products: ${error}`);
    }
}

const getProducts= async(req,res) => {

const {id}=req.params;
console.log(id);

    try{
        const products= await knex("products")
                .where("products.id", id);
                console.log(products);

                if (!products) {
                    return res.status(404).json({ message: "Products not found." });
                  }
              
                  res.status(200).json(products);
    }
    catch(error){
        res.status(400).send(`Error retrieving Products: ${error}`);
    }
}


module.exports = {
	index,getProducts
}