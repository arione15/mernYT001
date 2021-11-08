const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({
    path: './config/.env'
});
require('./config/db');
const app = express();



// routes
app.use('/api/user', userRoutes);


// server
app.listen(process.env.PORT, () => {
    console.log(`Server listen on http://localhost:${process.env.PORT}`)
})