const { Sequelize } = require('sequelize');

// Criar o conector à base de dados

function connect() {
    // Colocar em .env
    const sequelize = new Sequelize('postgres://talhovvdb_user:kjo3L3ANtxUvdaSps2q9CrMvJoEmeXMX@dpg-cica3k59aq03rjmfv800-a.frankfurt-postgres.render.com/talhovvdb',
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