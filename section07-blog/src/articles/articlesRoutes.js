import express from "express";
import Articles from "./articlesController.js";

const routes = express.Router()

routes.get("/articles", Articles.home);

export default routes;