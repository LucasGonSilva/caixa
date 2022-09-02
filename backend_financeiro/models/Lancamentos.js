const Sequelize = require('sequelize');
const db = require('./db');

const Lancamentos = db.define('lancamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },//Tipo 1: Pagamento / Tipo 2: Recebido
    tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },//Situa��o 1: Pago / Situa��o 2: Pendente / Situa��o 3: Recebido / Situa��o 4: A receber
    situacao: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    dataPagamento: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

//Verificar se existe a tabela, n�o existindo a tabela � criado a mesma
//Lancamentos.sync();


//Verificar as altera��es da tabela e realiza a mesma
//Lancamentos.sync({alter: true});

module.exports = Lancamentos;