import express from "express";
import bodyParser from "body-parser";
import connection from "./config/connection.js"
import routes from "./routes/index.js";

const app = express();

// set view engine
app.set("view engine", "ejs");
// set express to use static files
app.use(express.static("public"));

// configure body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database connection
try {
  await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

routes(app);
export default app;

