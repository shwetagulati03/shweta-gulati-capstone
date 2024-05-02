require("dotenv").config();
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const cors = require("cors");
const categoryRouter = require("./routes/category-routes"); 
const productsRouter = require("./routes/products-routes"); 
const generateRouter = require("./routes/generate-routes"); 
const ordersRouter = require("./routes/orders-routes"); 

const PORT = process.env.PORT || 8080;

app.use(cors());


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/category", categoryRouter);
app.use("/products", productsRouter);
app.use("/generate",generateRouter);
app.use("/orders",ordersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
