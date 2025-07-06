import { Sequelize } from "sequelize";
import connection from "../config/database.js";

const Answer = connection.define('answers',{
    body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    questionID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//caso a tabela já exista não será forçada a criação dela
Answer.sync({force: false})
    .then(() => {
        console.log("Answer table creted or loaded.")
    })

export default Answer;