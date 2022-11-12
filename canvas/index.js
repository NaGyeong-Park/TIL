const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});
class Player {
  constructor() {
    x: 0;
    y: 0;
  }

  moveX(x) {
    this.x += x;
  }
  moveY(y) {
    this.y += y;
  }
}

const playerMap = new Object();
io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("a user connected");
  socket.emit("hi", "hi");
  playerMap[socket.id] = new Player();

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
  socket.on("moveX", (x) => {
    playerMap[socket.id].moveX(x);
    console.log(playerMap[socket.id]);
  });
  socket.on("moveY", (y) => {
    playerMap[socket.id].moveY(y);
  });
});

setInterval(() => {
  io.emit("players", playerMap);
}, 1000 / 30);

server.listen(3000, () => {
  console.log("listen on *:3000");
});
