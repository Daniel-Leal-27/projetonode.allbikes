const {query} = require ("../BD/conexao/index")

const mostrando_itens = (req,res) => {
    query('SELECT * FROM cadastro.itens;', (error, result) => {
        res.render('index', {dados:result});    
    })
}
const enviando_itens = (req,res) => {
    const itens = req.body
    query('insert into itens set ?', itens, res.redirect('/'))
}

module.exports = {mostrando_itens, enviando_itens}