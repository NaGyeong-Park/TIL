const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
  playerMap.set(socket.id, new Player());
  console.log(playerMap);
  console.log(socket.id);
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    socket.broadcast.emit("hi");
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

server.listen(3000, () => {
  console.log("listen on *:3000");
});
