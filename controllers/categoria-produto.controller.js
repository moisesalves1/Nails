const CategoriaProduto = require('../models/categoria-produto.model');

const obterCategoriaProdutos = async (req, res) => {
    try {
        const categoriaProdutos = await CategoriaProduto.find({});
        res.status(200).json(categoriaProdutos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const obterCategoriaProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const categoriaProduto = await CategoriaProduto.findById(id)
        console.log('categoriaProdutos')
        console.log(categoriaProdutos)
        // categoriaProduto.categoriaId = 
        res.status(200).json(categoriaProduto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const cadastrarCategoriaProduto =  async (req, res) => {
    try {
        const categoriaProduto = await CategoriaProduto.create(req.body);
        res.status(201).json(categoriaProduto)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const atualizarCategoriaProdutoPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const categoriaProduto = await CategoriaProduto.findByIdAndUpdate(id, req.body);
        if (!categoriaProduto){
            return res.status(404).json({message: "CategoriaProduto não encontrado"});
        }
        
        const categoriaProdutoAtualizado = await CategoriaProduto.findById(id);
        res.status(200).json(categoriaProdutoAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const excluirCategoriaProdutoPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const categoriaProduto = await CategoriaProduto.findByIdAndDelete(id, req.body);
        if (!categoriaProduto){
            return res.status(404).json({message: "CategoriaProduto não encontrado"});
        }
        res.status(200).json({message: "CategoriaProduto excluído com sucesso!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    obterCategoriaProdutos,
    obterCategoriaProdutoPorId,
    cadastrarCategoriaProduto,
    atualizarCategoriaProdutoPorId,
    excluirCategoriaProdutoPorId
}