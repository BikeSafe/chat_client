const express = require("express");
const path = require("path");
const socketIO = require("socket.io");

const config = require("./config");

const app = express();

// Settings
app.set("port", config.PORT);

// Static files
app.use(express.static(path.join(__dirname,'../' ,'public')))

// Middlewares
app.use(express.json());

// Start server
const server = app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

const io = socketIO(server);

module.exports = app;