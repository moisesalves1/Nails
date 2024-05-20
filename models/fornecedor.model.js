const mongoose = require('mongoose');

const FornecedorSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome do fornecedor é obrigatório"]
        },
        telefone: {
            type: String,
            required: [true, "O telefone do fornecedor é obrigatório"]
        },
        email: {
            type: String,
            required: false
        },
        endereco: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true 
    }
);

const Fornecedor = mongoose.model("Fornecedor", FornecedorSchema);
module.exports = Fornecedor;