const express = require('express');
const router = express.Router();

const { 
    obterFornecedores, 
    obterFornecedorPorId, 
    cadastrarFornecedor, 
    atualizarFornecedorPorId, 
    excluirFornecedorPorId 
} = require('../controllers/fornecedor.controller');

router.get('/', obterFornecedores);
router.get('/:id', obterFornecedorPorId)
router.post('/', cadastrarFornecedor);
router.put('/:id', atualizarFornecedorPorId);
router.delete('/:id', excluirFornecedorPorId);


module.exports = router;