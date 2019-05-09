require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const morgan = require("morgan");
const _= require("lodash");
const request = require('request');

const Post = require("./models/post");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/signup", function(req, res) {
  const email = req.body.email;

  console.log("this is the app.post email:  " + req.body.email);

  const options = {
    url: `https://us20.api.mailchimp.com/3.0/lists/${process.env.id}`,
    method: "POST",
    headers: {
      "Authorization": `devxtensionapi ${process.env.apikey}`
    },
    body: JSON.stringify({ email_address: email, status: "subscribed" })
  }


  // call the function
  request(options, function(error, response, body) {
    try {
      var respObj = {};

      if (response.statusCode === 200) {
        console.log(response.statusCode);
        respObj = { success: `Subscribed using ${email}`, message: JSON.parse(response.body) };
      } else {
        console.log(error)
        respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
      }
        res.send(respObj);

    } catch(err) {
      const respErrorObj = { error: `There was an error with your request`, message:  err.message }
      res.send(respErrorObj)
      console.log(err)
    }

  })

});

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