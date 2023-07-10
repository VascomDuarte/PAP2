/*
Encomenda
- id_enc
- userId
- Status
- Preco
- Quantidade
*/ 

// Importar o Sequelize
const Sequelize = require('sequelize');

// Importar o conector à base de dados
const connector = require('../Database/connector.js')();

// Importar os modelos/tabelas
const User = require('./users.js');
const Produto = require('./produtos.js');

// Criar o modelo/tabela na base de dados
const Encomenda = connector.define('encomenda', {
    // Atributos
    id_enc: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // Opções
});

// Adicionar a refKey
Encomenda.belongsTo(User, { foreignKey: 'userId' });
Encomenda.belongsTo(Produto, { foreignKey: 'produtoId' });

// Sincronizar o modelo/tabela com a base de dados
// Encomenda.sync({ force: false });

module.exports = Encomenda;