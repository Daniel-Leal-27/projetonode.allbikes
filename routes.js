const express = require('express');
const caminho = express.Router() //é uma função do express para gerenciar rotas
const sql = require('./controles/index')

caminho.get("/", sql.mostrando_itens)

caminho.post("/", sql.enviando_itens)





module.exports = caminho;

//CRUD -> get, post, pull, delete (o que irá gerar minhas rotas na web) tem o express como pai também, assim como o express.Router
//get = mostrar dados na tela
//post = enviar dados para o BD
//pull = mesma função do post, porém de forma que atualiza os dados
//delete = apagar inf.
//toda rota no express tem dois parâmetros

//o método expressRouter() só serve pois estou com rotas no arquivo separado do principal