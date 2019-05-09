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
    numLikes: 0,
    category: "learn"
  },
  {
    author: "Smeagol",
    title: "I love my humans",
    body: "I just love my humans. Actually, I love all humans. I just want to be loved in return.",
    numLikes: 0,
    category: "teach"
  },
  {
    author: "Yumikat",
    title: "Warm spots",
    body: "I don't use sunscreen. But I love to sunbathe. It makes my cold heart just a little warmer.",
    numLikes: 0,
    category: "rant"
  },
  {
    author: "Dad",
    title: "What do you call cheese that isn't yours?",
    body: "Nacho Cheese.",
    numLikes: 0,
    category: "dadjokes"
  },
  {
    author: "The Cat",
    title: "What do you call cheese that IS yours?",
    body: "Nap all day chase red laser dot so be superior nap all day. Jump around on couch, meow constantly until given food, your pillow is now my pet bed so lick human with sandpaper tongue chase the pig around the house but chew on cable scratch. Playing with balls of wool mewl for food at 4am, for fall asleep on the washing machine for climb a tree, wait for a fireman jump to fireman then scratch his face. Slap kitten brother with paw i can haz. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle lick plastic bags but fall asleep on the washing machine, gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye so asdflkjaertvlkjasntvkjn (sits on keyboard), love me! find box a little too small and curl up with fur hanging out . Pet me pet me pet me pet me, bite, scratch, why are you petting me chew on cable rub against owner because nose is wet. Leave hair on owner's clothes fight an alligator and win, headbutt owner's knee yet all of a sudden cat goes crazy. Murr i hate humans they are so annoying. Paw at beetle and eat it before it gets away cat mojo . Meow and walk away. You are a captive audience while sitting on the toilet, pet me. ",
    numLikes: 0,
    category: "success"
  },
  {
    author: "Leo",
    title: "Why do pirates always have to be so cool?",
    body: "Jolly Roger rutters spanker jolly boat Sink me scurvy Blimey tackle ahoy pirate. Gold Road tack salmagundi overhaul avast gangway scuttle schooner gunwalls league. Starboard dance the hempen jig topmast rigging wherry Pieces of Eight hempen halter brig belaying pin come about.  Pinnace ye cable Arr hulk weigh anchor run a shot across the bow Privateer maroon execution dock. Man-of-war Privateer boom walk the plank flogging bucko chase fathom wherry starboard. Bilge rat dead men tell no tales lugsail nipperkin keelhaul Gold Road rigging Privateer gibbet maroon. ",
    numLikes: 0,
    category: "learn"
  },
  {
    author: "Janelle",
    title: "10 ways to know you're just the right amount of cheese.",
    body: "Blue castello cheese strings babybel. Red leicester gouda cottage cheese who moved my cheese airedale cottage cheese pecorino caerphilly. Cheesy grin cheeseburger cheese strings jarlsberg cheddar taleggio manchego edam. Cheese on toast cheddar pepper jack.",
    numLikes: 0,
    category: "teach"
  },
  {
    author: "Natalie",
    title: "Did you hear about the cheese factory that exploded in France?",
    body: "There was nothing left but de Brie.",
    numLikes: 0,
    category: "dadjokes"
  },
  {
    author: "Tyler",
    title: "I'm so excited for my new job!",
    body: "Due diligence put your feelers out. Quantity push back vertical integration great plan! let me diarize this, and we can synchronise ourselves at a later timepoint but pulling teeth. What do you feel you would bring to the table if you were hired for this position anti-pattern, for time to open the kimono root-and-branch review social currency high touch client for cannibalize. Deep dive high-level and no scraps hit the floor loop back.",
    numLikes: 0,
    category: "success"
  },
  {
    author: "Sarah",
    title: "I'm here to teach you about zombies.",
    body: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.",
    numLikes: 0,
    category: "teach"
  },
  {
    author: "Brayden",
    title: "Ancient alien technology is the BEST.",
    body: "Ancient alien worm hole mainstream archaelogy worm hole space travel electromagnetic extraterrestrial origin, ancient religions anti-gravity star gates UFO cover up magnetic current golden disk, mainstream archaelogy von Daniken gods Mahabharata clearly Sumerian texts. Ancient alien theorists Easter island ancient religions ancient alien theorists, kachina doll electromagnetic helicopter heiroglyph.",
    numLikes: 0,
    category: "rant"
  },
  {
    author: "Robby",
    title: "Are these the droids you're looking for?",
    body: "Threepio! Come in, Threepio! Threepio! Get to the top! I can’t Where could he be? Threepio! Threepio, will you come in? They aren’t here! Something must have happened to them. See if they’ve been captured. Hurry! One thing’s for sure. We’re all going to be a lot thinner! Get on top of it! I’m trying! Thank goodness, they haven’t found them! Where could they be? Use the comlink? Oh, my! I forgot I turned it off! Are you there, sir? ",
    numLikes: 0,
    category: "learn"
  },
  {
    author: "Yumikat",
    title: "Do this one thing to improve your humor",
    body: "All you need to do is smile.",
    numLikes: 0,
    category: "tipstricks"
  },



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
