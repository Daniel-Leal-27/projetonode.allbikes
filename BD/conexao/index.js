const mysql = require('mysql')
 
//segue abaixo a conexão com o BD
const conexaoBD = mysql.createConnection({ 
    host:"localhost",
    port:"3306",
    database:"cadastro",
    password:"password",
    user:"root"
 })

 const query = (sql,callback) => {
     return conexaoBD.query(sql,callback);
 };

 // abaixo exportando as duas funções
module.exports = {
    conexaoBD, query
}

