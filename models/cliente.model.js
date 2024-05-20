const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome do cliente é obrigatório"]
        },
        telefone: {
            type: String,
            required: [true, "O telefone do cliente é obrigatório"]
        },
        dataNascimento: {
            type: Date,
            required: [true, "A data de nascimento do cliente é obrigatória"]
        }
    },
    {
        timestamps: true 
    }
);

const Cliente = mongoose.model("Cliente", ClienteSchema);
module.exports = Cliente;