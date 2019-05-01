const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: {
        type: String,
        trim: true,
        require: "Author is required."
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;