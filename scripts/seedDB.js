const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogdb");

const blogSeed = [
  {
    author: "Yumikat",
    title: "Crying for food",
    body: "Today, I kept crying for food, but they kept ignoring me, like usual. Some day, they will regret ignoring me.",
    numLikes: 0,
    category: "rant"
  },
  {
    author: "Lokikat",
    title: "Destroy",
    body: "I have the need to destroy everything. Not sure why, but I just do. Also, I am genuinely curious about things around me.",
    numLikes: 7,
    category: "learn"
  },
  {
    author: "Smeagol",
    title: "I love my humans",
    body: "I just love my humans. Actually, I love all humans. I just want to be loved in return.",
    numLikes: 2,
    category: "teach"
  },
  {
    author: "Yumikat",
    title: "Warm spots",
    body: "I don't use sunscreen. But I love to sunbathe. It makes my cold heart just a little warmer.",
    numLikes: 5,
    category: "rant"
  },
  {
    author: "Dad",
    title: "What do you call cheese that isn't yours?",
    body: "Nacho Cheese.",
    numLikes: 10,
    category: "teach"
  },
  {
    author: "The Cat",
    title: "What do you call cheese that isn't yours?",
    body: "Nap all day chase red laser dot so be superior nap all day. Jump around on couch, meow constantly until given food, your pillow is now my pet bed so lick human with sandpaper tongue chase the pig around the house but chew on cable scratch. Playing with balls of wool mewl for food at 4am, for fall asleep on the washing machine for climb a tree, wait for a fireman jump to fireman then scratch his face. Slap kitten brother with paw i can haz. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle lick plastic bags but fall asleep on the washing machine, gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye so asdflkjaertvlkjasntvkjn (sits on keyboard), love me! find box a little too small and curl up with fur hanging out . Pet me pet me pet me pet me, bite, scratch, why are you petting me chew on cable rub against owner because nose is wet. Leave hair on owner's clothes fight an alligator and win, headbutt owner's knee yet all of a sudden cat goes crazy. Murr i hate humans they are so annoying. Paw at beetle and eat it before it gets away cat mojo . Meow and walk away. You are a captive audience while sitting on the toilet, pet me. Sun bathe kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? hey! you there, with the hands for fish i must find my red catnip fishy fish or sit on the laptop ooh, are those your $250 dollar sandals? lemme use that as my litter box. Climb leg i like cats because they are fat and fluffy. Friends are not food meow all night hate dog, yet playing with balls of wool nya nya nyan. Slap owner's face at 5am until human fills food dish you are a captive audience while sitting on the toilet, pet me. Jump five feet high and sideways when a shadow moves small kitty warm kitty little balls of fur put butt in owner's face. ",
    numLikes: 10,
    category: "teach"
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
