const mongoose = require('mongoose');

const CategoriaProdutoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome da categoria do produto é obrigatório"]
        },
        descricao: {
            type: String,
            required: [true, "A descrição da categoria do produto é obrigatória"]
        },
        categoriaId: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true 
    }
);

const CategoriaProduto = mongoose.model("CategoriaProduto", CategoriaProdutoSchema);
module.exports = CategoriaProduto;