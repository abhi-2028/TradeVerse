const { Schema, model } = require("mongoose");

module.exports.WatchListSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: Number,
  percent: String,
  isDown: Boolean,
});
