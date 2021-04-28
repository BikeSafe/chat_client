const express = require("express");

const config = require("./config");

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(express.json());

module.exports = app;