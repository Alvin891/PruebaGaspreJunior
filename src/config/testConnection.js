const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida exitosamente con PostgreSQL.');
    } catch (error) {
        console.error('Error al conectar con PostgreSQL:', error);
    } finally {
        await sequelize.close();
    }
})();