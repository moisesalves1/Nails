const express = require('express');
const router = express.Router();

const { 
    obterCategoriaProdutos, 
    obterCategoriaProdutoPorId, 
    cadastrarCategoriaProduto, 
    atualizarCategoriaProdutoPorId, 
    excluirCategoriaProdutoPorId 
} = require('../controllers/categoria-produto.controller');

router.get('/', obterCategoriaProdutos);
router.get('/:id', obterCategoriaProdutoPorId)
router.post('/', cadastrarCategoriaProduto);
router.put('/:id', atualizarCategoriaProdutoPorId);
router.delete('/:id', excluirCategoriaProdutoPorId);


module.exports = router;