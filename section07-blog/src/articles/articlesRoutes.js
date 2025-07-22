import express from "express";
import Articles from "./articlesController.js";

const routes = express.Router()

routes.get("/admin/articles/new", Articles.newArticle);
routes.post("/articles/save" , Articles.saveArticle);
routes.get("/admin/categories", Articles.listArticles);

export default routes;