import express from 'express';

const app = express()
const PORT = 8080

// Noraml route
app.get("/", (req,res) => {
    res.status(200).json({message: "Welcome to the main page!"})
})

// Second route
app.get("/greet", (req,res) => {
    res.status(200).json({message: "Welcome to the main page, Hope you are doing well!"})
});

// Route with optional param
app.get("/bye", (req, res) => {    
    res.status(200).json({ message: "Bye bye!" });
});

// Route with optional param
app.get("/bye/:name", (req, res) => {
    const { name } = req.params;    
    res.status(200).json({ message: `Hope see you soon ${name}!` });
});

// Route with query params
app.get("/hug", (req, res) => {
    const name = req.query["name"]
    const message = name ? `I really liked yout hug ${name}` : "Hope hug you again"
    res.status(200).json({message: message})
})
 
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error to initialize the http server. Error:",err)
    } else {
        console.log(`Server listening on port ${PORT} ...`)
    }
});