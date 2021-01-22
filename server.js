//módulo e função tem o mesmo significado(mesma função)

const express = require('express'); //puxando/requerindo módulo express
const App = express();

const caminho = require('./routes') //exportei a rota (caminho) do arquivo routes.js
App.use(caminho);

//use é um método do express


//abrindo porta
App.listen(1900, () => {
    console.log("Servidor ativo")
} )


//função anônima ou função de callback ou função sem nome -> "parâmetros da função" -> ()
//puxada para ação -> =>
//onde fica o resultado da função ->  {}
//resumo:
//funcaoanonima () => {}

//console.log funciona dentro de um componente ou dentro de uma função
//listen é um método próprio do módulo express - objetivo apenas abrir a porta "1900"
//eu criei uma função anônima para poder rotar o console.log e ter a certeza de que o servidor está ativo