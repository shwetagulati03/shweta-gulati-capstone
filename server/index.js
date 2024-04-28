require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const categoryRouter = require("./routes/category-routes"); 
const productsRouter = require("./routes/products-routes"); 

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/category", categoryRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
