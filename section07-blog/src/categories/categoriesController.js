import Category from "./Category.js";
import slugify from "slugify";

class Categories {
    static async home (_,res) {
        res.status(200).json({message: "Welcome to the page categories"});
    };

    static async newCategory (_,res) {
        res.status(200).render("admin/categories/new");
    };

    static async save (req,res) {
        const title = req.body.title;
        console.log("Title:",title)
        if (title) {
            Category.create({
                title: title,
                slug: slugify(title)
            }).then(() => {
                res.status(300).redirect("/")
            })
        } else {
            res.status(200).redirect("/admin/categories/new");
        }
    };

    static async listCategories (req, res) {
        Category.findAll().then((categories) => {
            res.status(200).render("admin/categories", {categories: categories})
        });
    };

    static async deleteCategory (req, res) {
        const id = req.body.id
        console.log("id:",id);
        if (id) {
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.status(300).redirect("/admin/categories");
            })
        } else {
            res.status(200).redirect("/admin/categories");
        }
    };
};

export default Categories;