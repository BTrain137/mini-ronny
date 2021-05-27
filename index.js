const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");

const routes = require("./routes");

const { PORT, DEBUG, } = process.env;
const port = PORT || 3001;

const app = express();
dotenv.config();

// Middleware
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (DEBUG) app.use(logger("dev"));

// API Routes
app.use(routes);

app.listen(port, () => console.log(`http://localhost:${port}`));

module.exports = app;
