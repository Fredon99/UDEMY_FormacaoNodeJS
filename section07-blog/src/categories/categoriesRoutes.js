import express from 'express';
import Categories from './categoriesController.js';

const routes = express.Router()

routes.get("/categories", Categories.home);
routes.get("/admin/categories/new", Categories.newCategory);
routes.post("/categories/save", Categories.save);
routes.get("/admin/categories", Categories.listCategories);
routes.post("/categories/delete", Categories.deleteCategory);
routes.post("/categories/update", Categories.updateCategory);
routes.get("/admin/categories/edit/:id", Categories.editCategory);


export default routes;