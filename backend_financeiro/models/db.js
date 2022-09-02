const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meu_banco', 'admin', 'Luc@s180', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conexão com o banco de dados realizado com sucesso!");
}).catch(function(err){
    console.log("Erro: Conexão com o banco de dados n�o realizado com sucesso!");
})

module.exports = sequelize;