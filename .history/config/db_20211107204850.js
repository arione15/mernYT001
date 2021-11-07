const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://mernYT:<password>@cluster0.qwdvc.mongodb.net/testmongodb+srv://" + process.env.DB_USER_PASS + "@mern-yt-001.wsybz.mongodb.net/mern-project")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));