const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({
    path: './config/.env'
});
require('./config/db');
const app = express();

// middleware pour gérer le CORS Cross Origin Resource Sharing (ajoute des headers à l'objet response qui permet à des requetes de différentes rigines de communiquer entre elles)
app.use(cors());

// définir la fonction json de express comme middleware global pour l'application
app.use(express.json());

// routes
app.use('/api/user', userRoutes);


// server
app.listen(process.env.PORT, () => {
    console.log(`Server listen on http://localhost:${process.env.PORT}`)
})