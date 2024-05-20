const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


const ClienteRoute = require('./routes/cliente.route');
const ProdutoRoute = require('./routes/produto.route');
const CategoriaProdutoRoute = require('./routes/categoria-produto.route');
const FornecedorRoute = require('./routes/fornecedor.route');



// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/cliente', ClienteRoute)
app.use('/api/produto', ProdutoRoute)
app.use('/api/categoria-produto', CategoriaProdutoRoute)
app.use('/api/fornecedor', FornecedorRoute)


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