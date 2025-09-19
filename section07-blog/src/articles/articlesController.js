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
                res.status(300).redirect("admin/articles");
            })
        } else {
            res.status(200).redirect("admin/articles");
        }
    };

    static async editArticle (req, res) {
        const id = req.params.id;

        Article.findByPk(id).then((article) => {
            if (article) {

                Category.findAll().then((categories) => {
                    res.render("admin/articles/edit", {categories: categories, article: article});
                });

            } else {
                res.redirect("/");
            }
        }).catch((err) => {
            res.redirect("/");
        });

    };

    static async updateArticle (req, res) {
        let id = req.body.id;
        let title = req.body.title;
        let body = req.body.body;
        let category = req.body.category;

        Article.update({
            title: title,
            body: body,
            categoryId: category,
            slug:slugify(title)
        }, {where: {id: id}}).then(() => {
            res.redirect("/admin/articles");
        }).catch(() => {
            res.redirect("/");
        })
    };

    static async articlesPagination(req, res) {
        let page = req.params.num;
        let offset = 0;
        let itemsPerPage = 4;

        if (!page) {
            offset = 0;
        } else {
            offset = parseInt(page) * itemsPerPage;
        }

        Article.findAndCountAll({
            limit: 4,
            offset: offset
        }).then((articles) => {
            console.log("---- Valor de offset: ", offset)
            let next;
            if (offset + 4 >= parseInt(articles.count)) {
                next = false;
            } else {
                next = true;
            };

            let result = {
                next: next,
                articles: articles
            };

            Category.findAll().then((categories) => {
                res.render("admin/articles/page", {result: result, categories: categories})
            });
        })
    };
};

export default Articles;