import { Sequelize } from "sequelize";

const connection = new Sequelize('guiapress', 'user_express', 'senha123', {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection;