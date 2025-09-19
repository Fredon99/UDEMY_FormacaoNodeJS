import Category from "./Category.js";
import Article from "../articles/Article.js"
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
                res.status(300).redirect("/admin/categories")
            })
        } else {
            res.status(200).redirect("/admin/categories/new");
        }
    };

    static async listCategories (req, res) {
        Category.findAll().then((categories) => {
            res.status(200).render("admin/categories/index", {categories: categories})
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

    static async editCategory (req, res) {
        const id = req.params.id
        Category.findByPk(id).then((category) => {
            if (category) {
                res.status(200).render("admin/categories/edit", {category: category})
            } else {
                res.status(300).redirect("/admin/categories");
            }
        })
    };

    static async updateCategory (req, res) {
        const id = req.body.id
        const title = req.body.title

        Category.update({
            title: title,
            slug: slugify(title)
        }, {
            where: {
                id: id
            }
        }).then( () => {
            res.status(300).redirect("/admin/categories")
        });

    };

    static async findBySlug (req,res) {
        const slug = req.params.slug
        
        Category.findOne({
            where: {
                slug: slug
            },
            include: [{model: Article}]
        }).then((category) => {
            if (category) {
                Category.findAll().then((categories) => {
                    res.status(200).render("index", {articles: category.articles, categories: categories});    
                })
            } else {
                // criar página de erro
                res.status(300).redirect("/");
            }
        }).catch(error => {
            res.status(300).redirect("/");
        });
    }

};


export default Categories;