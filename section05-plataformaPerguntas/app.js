import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

//engine for views
app.set("view engine","ejs");
app.use(express.static("public"));

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.get("/", (req, res) => {
    res.render("index")
});

app.get("/question", (req, res) => {
    res.render("question")
});

app.post("/savequestion", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    
    res.status(200).json({title: title, description: description});
});

app.listen(PORT, (err) => {
    if (err) {
        console.error("Server did not start. Error:", err);
    }
    console.log(`Server running on port ${PORT} ...`);
});