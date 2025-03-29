// Set Up Handlebars
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const app = express();

// Set view engine to Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Register partials
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/user", userRouter);

module.exports = app;
