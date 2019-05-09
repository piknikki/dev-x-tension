const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const morgan = require("morgan");
const _= require("lodash");

const Post = require("./models/post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//Routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogdb", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build.index.html"));
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});