const express = require('express');
const mongoose = require('mongoose');
const Cliente = require('./models/cliente.model');
const ClienteRoute = require('./routes/cliente.route');
const app = express();
require('dotenv/config');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/cliente', ClienteRoute)


app.get('/', (req, res) => {
    res.send('Hello, Nails!');
})




mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log('Connection failed');
});