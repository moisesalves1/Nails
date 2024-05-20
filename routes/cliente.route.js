const express = require('express');
const router = express.Router();

const { 
    obterClientes, 
    obterClientePorId, 
    cadastrarCliente, 
    atualizarClientePorId, 
    excluirClientePorId 
} = require('../controllers/cliente.controller');

router.get('/', obterClientes);
router.get('/:id', obterClientePorId)
router.post('/', cadastrarCliente);
router.put('/:id', atualizarClientePorId);
router.delete('/:id', excluirClientePorId);


module.exports = router;