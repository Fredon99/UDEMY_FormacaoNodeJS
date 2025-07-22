import { Sequelize } from "sequelize";

const connection = new Sequelize('guiapress', 'user_express', 'senha123', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"
});

export default connection;