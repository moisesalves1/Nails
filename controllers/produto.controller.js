const Produto = require('../models/produto.model');

const obterProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const obterProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findById(id)
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const cadastrarProduto =  async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const atualizarProdutoPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByIdAndUpdate(id, req.body);
        if (!produto){
            return res.status(404).json({message: "Produto não encontrado"});
        }
        
        const produtoAtualizado = await Produto.findById(id);
        res.status(200).json(produtoAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const excluirProdutoPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByIdAndDelete(id, req.body);
        if (!produto){
            return res.status(404).json({message: "Produto não encontrado"});
        }
        res.status(200).json({message: "Produto excluído com sucesso!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    obterProdutos,
    obterProdutoPorId,
    cadastrarProduto,
    atualizarProdutoPorId,
    excluirProdutoPorId
}