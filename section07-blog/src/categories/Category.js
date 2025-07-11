import { Sequelize } from "sequelize";
import connection from "../config/connection.js";


const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Necessário para criar a tabela quando iniciar a aplicação e depois comentar ou colocar como false
Category.sync({force: false});

export default Category;