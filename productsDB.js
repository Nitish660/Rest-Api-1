require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./models/products.js");
const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();
