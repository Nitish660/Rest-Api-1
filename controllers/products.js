const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "api is working" });
}



const getAllTestingProducts = async (req, res) => {
    res.status(200).json({ msg: "testing api is working" });
}


module.exports = { getAllProducts, getAllTestingProducts };