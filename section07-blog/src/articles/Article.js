import { Sequelize } from "sequelize";
import connection from "../config/connection.js";
import Category from "../categories/Category.js";


const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Posso criar vários relacionamentos - Relacionamentos birecionais || Geralmente sempre escolher um model para criar os relacionamentos.
Category.hasMany(Article); // Uma categoria possui varios artigos
Article.belongsTo(Category); // Um artigo pertence a uma categoria

// Necessário para criar a tabela quando iniciar a aplicação e depois comentar ou colocar como false
Article.sync({force: false});

export default Article;