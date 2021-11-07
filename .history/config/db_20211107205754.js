const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://${DB_USER_PASS}@cluster0.qwdvc.mongodb.net/mern-project`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err);