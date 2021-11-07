const mongoose = require("mongoose");

mongoose
    .connect(`mongodb + srv: //masMernProject:massinemern001@mern-yt-001.wsybz.mongodb.net/test${process.env.DB_USER_PASS}@cluster0.vnukl.mongodb.net/mern-project`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));