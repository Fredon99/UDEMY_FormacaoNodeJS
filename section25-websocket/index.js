import express from "express";
import http from "http";
import { Server } from "socket.io";

const PORT = 3001;
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to server
const io = new Server(server, {
  cors: {
    origin: "*", // configure this for security in real apps
  },
});

// render engine
app.set("view engine", "ejs");

// main route
app.get("/", (req, res) => {
    res.render("index");
});

// Handle socket connections
io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("palavra", (data) => {
        console.log("Mensagem do socket:");
        console.log(data);
        socket.emit("resultado", data + " - mensagem recebida com sucesso");
    })

    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get
