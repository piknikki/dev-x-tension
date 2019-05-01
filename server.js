const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const Post = require("./models/post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(express.static("public"));
//Routes
//require("./routes/api-routes.js")(app);
//require(".routes/html-routes.js")(app);
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogdb", { useNewUrlParser: true });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build.index.html"));
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});