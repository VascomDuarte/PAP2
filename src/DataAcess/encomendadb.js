// Import modelo encomenda
const Encomenda = require('../Models/encomenda.js');

// CRUD

// Create
function createEncomenda(status, preco, quantidade) {
    try{
        Encomenda.create({
            status: status,
            preco: preco,
            quantidade: quantidade
        });
    }
    catch(err){
        console.log(err);
    }
}

// Read by id
async function readEncomendaById(id) {
    try{
        const encomenda = await Encomenda.findByPk(id);
        return encomenda;
    }
    catch(err){
        console.log(err);
    }
}

// Read all
async function readAllEncomendas() {
    try{
        const encomendas = await Encomenda.findAll();
        return encomendas;
    }
    catch(err){
        console.log(err);
    }
}

// Update
async function updateEncomenda(id, status, preco, quantidade) {
    try{
        const encomenda = await Encomenda.findByPk(id);
        encomenda.status = status;
        encomenda.preco = preco;
        encomenda.quantidade = quantidade;
        encomenda.save();
    }
    catch(err){
        console.log(err);
    }
}

// Delete
async function deleteEncomenda(id) {
    try{
        const encomenda = await Encomenda.findByPk(id);
        encomenda.destroy();
    }
    catch(err){
        console.log(err);
    }
}

// Testes
function Test(){
    createEncomenda("Enviado", 10.5, 2);

    readAllEncomendas().then((encomendas) => {
        console.log(encomendas);
    });

    readEncomendaById(1).then((encomenda) => {
        console.log(encomenda);
    });

    updateEncomenda(1, "Entregue", 10.5, 2);

    deleteEncomenda(1);
}

// Test();


// Exports
module.exports = {
    createEncomenda,
    readEncomendaById,
    readAllEncomendas,
    updateEncomenda,
    deleteEncomenda
}