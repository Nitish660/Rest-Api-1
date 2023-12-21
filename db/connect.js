const mongoose = require("mongoose");

const connectDB =async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true, // Enable TLS
            tlsInsecure: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }

};

module.exports = connectDB