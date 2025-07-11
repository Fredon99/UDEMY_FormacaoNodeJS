import express from 'express';
import categories from '../categories/categoriesRoutes.js';
import articles from '../articles/articlesRoutes.js';

const routes = (app) => {

    app.route("/").get((req,res) => {
        res.status(200).render("index")
    });

    app.use(express.json(), categories)
    app.use(express.json(), articles)
}

export default routes;