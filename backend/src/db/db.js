const mongoose = require('mongoose');
dbURL = process.env.MONGO_URL

function connectDB() {
    mongoose.connect(dbURL)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
        })
}

module.exports = connectDB;