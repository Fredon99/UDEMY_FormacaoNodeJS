const http = require("http");
const PORT = 8080;


http.createServer((req, res) => {
    res.end("Welcome to the http server from NodeJS")
}
).listen(PORT);
console.log(`Server listening on port ${PORT} ...`)