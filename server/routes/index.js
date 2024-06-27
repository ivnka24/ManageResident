const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Test Running");
});

module.exports = routes;
