import express from 'express';
import Categories from './categoriesController.js';

const routes = express.Router()

routes.get("/admin/categories", Categories.listCategories);
routes.get("/admin/categories/new", Categories.newCategory);
routes.get("/admin/categories/edit/:id", Categories.editCategory);
routes.get("/categories", Categories.home);
routes.post("/categories/save", Categories.save);
routes.post("/categories/delete", Categories.deleteCategory);
routes.post("/categories/update", Categories.updateCategory);
routes.get("/category/:slug", Categories.findBySlug);




export default routes;