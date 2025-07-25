import express from 'express';
import categories from '../categories/categoriesRoutes.js';
import articles from '../articles/articlesRoutes.js';
import Article from '../articles/Article.js';
import Category from '../categories/Category.js';

const routes = (app) => {

    app.route("/").get((req,res) => {
        Article.findAll({
            include: [{model: Category}]
        }).then( (articles) => {
            res.status(200).render("index", {articles: articles})
        });
    });

    app.use(express.json(), categories)
    app.use(express.json(), articles)
}

export default routes;