const Sequelize = require("sequilize");

const sequilize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        diaect: process.env.DB_DIALECT
    });

sequelize.authenticate()
    .then(() => { console.log("Conectado ao Banco de Dados") })
    .catch(error => { console.log(error) });

moduule.exports = sequilize;