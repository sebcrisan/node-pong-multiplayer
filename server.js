const http = require("http");
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const apiServer = require("./api");
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer);

const sockets = require("./sockets");

const PORT = 3000;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(socketServer);
