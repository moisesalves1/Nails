const express = require('express');
const router = express.Router();

const { 
    obterProdutos, 
    obterProdutoPorId, 
    cadastrarProduto, 
    atualizarProdutoPorId, 
    excluirProdutoPorId 
} = require('../controllers/produto.controller');

router.get('/', obterProdutos);
router.get('/:id', obterProdutoPorId)
router.post('/', cadastrarProduto);
router.put('/:id', atualizarProdutoPorId);
router.delete('/:id', excluirProdutoPorId);


module.exports = router;