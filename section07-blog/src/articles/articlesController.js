import Article from "./Article.js";
import slugify from "slugify";
import Category from "../categories/Category.js";

class Articles {
    static async newArticle (_,res) {
        Category.findAll().then((categories) => {
            res.status(200).render("admin/articles/new", {categories: categories})
        });
    };

    static async saveArticle (req,res) {
        const title = req.body.title;
        const body = req.body.body;
        const category = req.body.category;

        Article.create({
            title: title,
            slug: slugify(title),
            body: body,
            categoryId: category
        }).then(() => {
            res.status(200).redirect("/admin/articles");
        })
    };

    static async listArticles (req, res) {
        res.status(200).json({message: "Welcome to articles route."});
    }
};

export default Articles;