/*
Produto
- id
- Nome
- Stock
- Preco
*/ 

// Importar o Sequelize
const Sequelize = require('sequelize');

// Importar o conector à base de dados
const connector = require('../Database/connector.js')();

// Importar o modelo/tabela "encomenda"
const Encomenda = require('./encomenda.js');

// Criar o modelo/tabela na base de dados
const Produto = connector.define('produto', {
    // Atributos
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // Opções
});

// Adicionar a refKey
Produto.hasMany(Encomenda, { foreignKey: 'produtoId' });

// Exportar o modelo/tabela
module.exports = Produto;