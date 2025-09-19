import express from 'express';
import categories from '../categories/categoriesRoutes.js';
import articles from '../articles/articlesRoutes.js';
import Article from '../articles/Article.js';
import Category from '../categories/Category.js';

const routes = (app) => {

    app.route("/").get((req,res) => {
        Article.findAll({
            include: [{model: Category}],
            order: [
                ['id', 'DESC']
            ],
            limit: 4
        }).then( (articles) => {
            Category.findAll().then((categories) => {
                res.status(200).render("index", {articles: articles, categories: categories});
            });
        });
    });

    app.route("/:slug").get((req,res) => {
        const slug = req.params.slug
        
        Article.findOne({
            where: {
                slug: slug
            }
        }).then( (article) => {
            if (article) {
                Category.findAll().then((categories) => {
                res.status(200).render("article", {article: article, categories: categories});
            });
            } else {
                res.status(300).redirect("/")
            }
        }).catch( (error) => {
            // criar pagina de erro
            res.status(300).redirect("/");
        });
    });

    app.use(express.json(), categories)
    app.use(express.json(), articles)
}

export default routes;