require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    driver: process.env.DB_DRIVER,
    
    options: {
        enableArithAbort: true,
        trustedConnection: true
    }
};

module.exports = {
    config
};