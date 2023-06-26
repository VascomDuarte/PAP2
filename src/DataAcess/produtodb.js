// Import modelo produto
const Produto = require('../Models/produto.js');



// CRUD

// Create
function createProduto(nome, stock, preco, descricao, foto) {
    try{
        Produto.create({
            nome: nome,
            stock: stock,
            preco: preco,
            descricao: descricao,
            foto: foto
        });
    }
    catch(err){
        console.log(err);
    }
}

// Read by id
async function readProdutoById(id) {
    try{
        const produto = await Produto.findByPk(id);
        return produto;
    }
    catch(err){
        console.log(err);
    }
}

// Read all
async function readAllProdutos() {
    try{
        const produtos = await Produto.findAll();
        return produtos;
    }
    catch(err){
        console.log(err);
    }
}

// Update
async function updateProduto(id, nome, stock, preco, descricao, foto) {
    try{
        const produto = await Produto.findByPk(id);
        produto.nome = nome;
        produto.stock = stock;
        produto.preco = preco;
        produto.descricao = descricao;
        produto.foto = foto;
        produto.save();
    }
    catch(err){
        console.log(err);
    }
}

// Delete
async function deleteProduto(id) {
    try{
        const produto = await Produto.findByPk(id);
        produto.destroy();
    }
    catch(err){
        console.log(err);
    }
}

// Test
function test() {
    createProduto('Produto 1', 10, 10.0, 'Descrição 1', 'Foto 1');

    readProdutoById(1).then((produto) => {
        console.log(produto);
    });

    readAllProdutos().then((produtos) => {
        console.log(produtos);
    });

    updateProduto(1, 'Produto 1', 10, 10.0, 'Descrição 1', 'Foto 1');

    deleteProduto(1);
}

// test();


// Exportar as funções
module.exports = {
    createProduto: createProduto,
    readProdutoById: readProdutoById,
    readAllProdutos: readAllProdutos,
    updateProduto: updateProduto,
    deleteProduto: deleteProduto
}
