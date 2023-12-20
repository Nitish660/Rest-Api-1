const express = require("express");
const app = express();

const PORT = process.env.PORT || 6001;

const productsRoutes = require("./routes/products");

/*app.get("/", (req, res) => {
    res.send("Hi, I am live");
});*/

app.use("/", productsRoutes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
