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

const categoryProducts= async(req,res) => {

//     SELECT products.*, category.name AS category_name FROM products JOIN category_products cp ON products.id = cp.product_id JOIN category ON cp.category_id = category.id WHERE cp.category_id = 2;
const {id}=req.params;

    try{
        const products= await knex("products")
                .select("products.*", "category.name as category_name")
                .join("category_products", "products.id", "=", "category_products.product_id")
                .join("category", "category_products.category_id", "=", "category.id")
                .where("category_products.category_id", id);

                if (!products) {
                    return res.status(404).json({ message: "Products not found." });
                  }
              
                  res.status(200).json(products);
    }
    catch(error){
        res.status(400).send(`Error retrieving Products: ${error}`);
    }
}

// const categoryName= async(req,res) => {

//     //     SELECT * FROM products JOIN category_products cp ON products.id = cp.product_id WHERE cp.category_id = 2;
//     const {id}=req.params;
    
//         try{
//             const cat= await knex("category")
//                     .where("category.id",id);
    
//                     if (!cat) {
//                         return res.status(404).json({ message: "Category not found." });
//                       }
                  
//                       res.status(200).json(cat);
//         }
//         catch(error){
//             res.status(400).send(`Error retrieving Cateogory: ${error}`);
//         }
//     }

module.exports = {
	index,categoryProducts
}