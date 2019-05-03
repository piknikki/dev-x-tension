const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogdb");

const blogSeed = [
  {
    author: "Yumikat",
    title: "Crying for food",
    date: new Date(Date.now()),
    body: "Today, I kept crying for food, but they kept ignoring me, like usual. Some day, they will regret ignoring me.",
    numLikes: 0,
    category: "Rant"
  },
  {
    author: "Lokikat",
    title: "Destroy",
    date: new Date(Date.now()),
    body: "I have the need to destroy everything. Not sure why, but I just do. Also, I am genuinely curious about things around me.",
    numLikes: 0,
    category: "Learn"
  },
  {
    author: "Smeagol",
    title: "I love my humans",
    date: new Date(Date.now()),
    body: "I just love my humans. Actually, I love all humans. I just want to be loved in return.",
    numLikes: 0,
    category: "Teach"
  },
  {
    author: "Yumikat",
    title: "Warm spots",
    date: new Date(Date.now()),
    body: "I don't use sunscreen. But I love to sunbathe. It makes my cold heart just a little warmer.",
    numLikes: 0,
    category: "Rant"
  }
];

db.Post
    .remove({})
    .then(() => db.Post.collection.insertMany(blogSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
