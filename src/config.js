const { config } = require("dotenv");
config();

module.exports = {
  PORT: process.env.PORT || 4009,
  URL_SERVER: "http://localhost:4008/"
};