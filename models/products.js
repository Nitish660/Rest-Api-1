const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String, // Corrected: 'string' to 'String'
        required: true
    },
    price: {
        type: Number, // Corrected: 'number' to 'Number'
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String, // Corrected: Removed unnecessary quotes
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: "{value} is not supported",
        },
        required: true // Added required constraint
    },
});

module.exports = mongoose.model("Product", productSchema);
