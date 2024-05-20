const Cliente = require('../models/cliente.model');

const obterClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({});
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const obterClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findById(id)
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const cadastrarCliente =  async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const atualizarClientePorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByIdAndUpdate(id, req.body);
        if (!cliente){
            return res.status(404).json({message: "Cliente não encontrado"});
        }
        
        const clienteAtualizado = await Cliente.findById(id);
        res.status(200).json(clienteAtualizado)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const excluirClientePorId =  async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByIdAndDelete(id, req.body);
        if (!cliente){
            return res.status(404).json({message: "Cliente não encontrado"});
        }
        res.status(200).json({message: "Cliente excluído com sucesso!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    obterClientes,
    obterClientePorId,
    cadastrarCliente,
    atualizarClientePorId,
    excluirClientePorId
}