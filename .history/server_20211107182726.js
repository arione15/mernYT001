const express = require('express');
require('./config/db');
require('dotenv').config({
    path: './config/.env'
});
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server listen on http://localhost:${process.env.PORT}`)
})