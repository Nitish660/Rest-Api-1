const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 6001;

const productsRoutes = require("./routes/products");

app.use("/", productsRoutes);

const start = async () => {
    try {
        await connectDB();
      
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
