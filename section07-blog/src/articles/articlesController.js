import Article from "./Article.js";

class Articles {
    static async home (_,res) {
        res.status(200).json({message: "Welcome to the page articles"})
    }
};

export default Articles;