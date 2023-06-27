const { Sequelize } = require('sequelize');

// Criar o conector à base de dados

function connect() {
    // Colocar em .env
    const sequelize = new Sequelize('postgres://talhovvdb_user:BU2Dy7DRgrIL9jsiMT3byAl1PpeRTEtV@dpg-cicqnlp5rnuk9qb97njg-a.frankfurt-postgres.render.com/talhovvdb_0pzy',
        {
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                },                
            },
            logging: false,
            pool: {
                idle: 30000,
                acquire: 30000,
            },
        });
    return sequelize;
}

module.exports = connect;