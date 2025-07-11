import express from 'express';
import Categories from './categoriesController.js';

const routes = express.Router()

routes.get("/categories", Categories.home);
routes.get("/admin/categories/new", Categories.newCategory);
routes.post("/categories/save", Categories.save);
routes.get("/admin/categories", Categories.listCategories);
routes.post("/categories/delete", Categories.deleteCategory);


export default routes;