// Express instantiation
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Config
const port = process.env.PORT || 3000;
const allRouters = require("./router/index");
const createRoutes = require("./services/setup/createRoutes");
const createDbConnection = require("./services/setup/createDbConnection");
const requestLogFormat =
  ":method :url :status :res[content-length] - :response-time ms";

const main = async () => {
  const db = createDbConnection();
  app.use(morgan(requestLogFormat));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  // Application setup
  app.get("/", (req, res) => {
    res.json({ success: true });
  });

  createRoutes(app, allRouters);

  app.listen(port, () => {
    console.log(`CultivatedCode car rental app listening on port: ${port}`);
  });
};

main();
