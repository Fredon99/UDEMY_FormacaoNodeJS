import express from "express";
import Articles from "./articlesController.js";

const routes = express.Router()

routes.get("/admin/articles", Articles.listArticles);
routes.get("/admin/articles/new", Articles.newArticle);
routes.post("/articles/save" , Articles.saveArticle);
routes.post("/articles/delete", Articles.deleteArticle);
routes.get("/admin/articles/edit/:id", Articles.editArticle);
routes.post("/articles/update", Articles.updateArticle);
routes.get("/articles/page/:num", Articles.articlesPagination);

export default routes;