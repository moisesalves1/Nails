const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O nome do produto é obrigatório"]
        },
        descricao: {
            type: String,
            required: [true, "A descrição do produto é obrigatória"]
        },
        marca: {
            type: String,
            required: false
        },
        quantidade: {
            type: Number,
            required: [true, "A quantidade do produto é obrigatória"]
        },
        valor: {
            type: Number,
            required: [true, "O valor do produto é obrigatório"]
        },
        categoriaId: {
            type: String,
            required: [true, "A categoria do produto é obrigatória"]
        }
    },
    {
        timestamps: true 
    }
);

const Produto = mongoose.model("Produto", ProdutoSchema);
module.exports = Produto;