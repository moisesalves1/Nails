const Fornecedor = require('../models/fornecedor.model');

const obterFornecedores = async (req, res) => {
    try {
        const fornecedors = await Fornecedor.find({});
        res.status(200).json(fornecedors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const obterFornecedorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findById(id)
        res.status(200).json(fornecedor);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const cadastrarFornecedor =  async (req, res) => {
    try {
        const fornecedor = await Fornecedor.create(req.body);
        res.status(201).json(fornecedor)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const atualizarFornecedorPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findByIdAndUpdate(id, req.body);
        if (!fornecedor){
            return res.status(404).json({message: "Fornecedor não encontrado"});
        }
        
        const fornecedorAtualizado = await Fornecedor.findById(id);
        res.status(200).json(fornecedorAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const excluirFornecedorPorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findByIdAndDelete(id, req.body);
        if (!fornecedor){
            return res.status(404).json({message: "Fornecedor não encontrado"});
        }
        res.status(200).json({message: "Fornecedor excluído com sucesso!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    obterFornecedores,
    obterFornecedorPorId,
    cadastrarFornecedor,
    atualizarFornecedorPorId,
    excluirFornecedorPorId
}