const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.vnukl.mongodb.net/mern_project`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));