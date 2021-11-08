const express = require('express');
constuserRoutes = require('./routes/user')
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