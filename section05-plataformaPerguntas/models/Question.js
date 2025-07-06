import { Sequelize } from "sequelize";
import connection from "../config/database.js";

const Question = connection.define('questions',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//caso a tabela já exista não será forçada a criação dela
Question.sync({force: false})
    .then(() => {
        console.log("Questions table created or loaded.")
    })

export default Question;