// Import the models
const Encomenda = require('../Models/encomenda.js');
const Produto = require('../Models/produto.js');
const User = require('../Models/user.js');


// Migration
async function migrate() {
    Encomenda.sync({force: true}).then(() => {
        console.log('Encomenda table created');
    });
    Produto.sync({force: true}).then(() => {
        console.log('Produto table created');
    });
    User.sync({force: true}).then(() => {
        console.log('User table created');
    });
}

migrate();