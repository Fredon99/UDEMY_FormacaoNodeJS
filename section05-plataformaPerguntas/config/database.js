import Sequelize from 'sequelize';

const connection = new Sequelize('guia_perguntas','user_express','senha123',{
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;