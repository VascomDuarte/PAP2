/*
Users
- id
- Nome
- Email
- Telefone
- Genero
- Idade
*/

// Importar o Sequelize
const Sequelize = require('sequelize');

// Importar o conector à base de dados
const connector = require('../Database/connector.js')();

// Importar o modelo/tabela "encomenda"
const Encomenda = require('./encomenda.js');

// Criar o modelo/tabela na base de dados
const User = connector.define('user', {
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
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // Opções
});

// Adicionar a refKey
User.hasMany(Encomenda, { foreignKey: 'userId' });

// Exportar o modelo/tabela
module.exports = User;
