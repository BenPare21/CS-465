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

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
