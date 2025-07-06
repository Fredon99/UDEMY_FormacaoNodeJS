import express from 'express';
import bodyParser from 'body-parser';
import connection from './config/database.js';
import Question from './models/Question.js'
import Answer from './models/Answer.js';


const app = express();
const PORT = 8000;

//database connection
connection.authenticate()
    .then(() => {
        console.log("Connected with mysql database!")
    })
    .catch((err) => {
        console.error(err)
    })

//engine for views
app.set("view engine","ejs");
app.use(express.static("public"));

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.get("/", (req, res) => {
    Question.findAll({raw: true, order: [
        ['id', 'DESC']
    ]})
        .then((questions) => {
            console.log(questions);
            res.render("index", {
                questions: questions
            });
        });
});

app.get("/question/:id",(req,res) => {
    const id = req.params.id
    Question.findOne({
        where: {id: id}
    }).then((question) => {
        if (question != undefined) {
        
            Answer.findAll({
                where: {questionID: question.id},
                order: [
                    ['id', 'DESC']
                ]
            }).then((answers) => {
                res.render("question", {
                    question: question,
                    answers: answers
                });
            });
        } else {
            res.redirect("/");
        };
    });
});

app.get("/toquestion", (req, res) => {
    res.render("toQuestion")
});

app.post("/savequestion", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    if (!title || !description || title.trim() === "" || description.trim() === "") {
        // Optionally send back with error message or redirect
        return res.status(400).json({error_message: "Title and description cannot be empty."});
    }

    Question.create({
        title: title,
        description: description
    }).then(() => {
        console.log("Question inserted on database.");
        res.redirect("/");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post("/toanswer", (req,res) => {
    const answerBody = req.body.answerBody
    const questionID = req.body.questionID

    Answer.create({
        body: answerBody,
        questionID: questionID
    }).then(() => {
        console.log("Answer inserted on database.");
        res.redirect(`/question/${questionID}`);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error("Server did not start. Error:", err);
    }
    console.log(`Server running on port ${PORT} ...`);
});