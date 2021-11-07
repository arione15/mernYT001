const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASS}masMernProjectmassinemern001@mern-yt-001.wsybz.mongodb.net/test
    mongodb+srv://@mern-yt-001.wsybz.mongodb.net/mern-project`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));