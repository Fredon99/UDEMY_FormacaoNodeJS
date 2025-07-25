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

        console.log(req.body)

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
        Article.findAll({
            include: [{model: Category}]
        }).then((articles) => {
            res.status(200).render("admin/articles/index", {articles: articles});
        });   
    };

    static async deleteArticle (req, res) {
        const id = req.body.id
        console.log("id:",id);
        if (id) {
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.status(300).redirect("/admin/articles");
            })
        } else {
            res.status(200).redirect("/admin/articles");
        }
    };
};

export default Articles;