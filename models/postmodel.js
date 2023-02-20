const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  device: String,
  no_of_comments: Number,
  user_id: String,
});

const PostModel = mongoose.Model("posts", PostSchema);

module.exports = {
  PostModel,
};
