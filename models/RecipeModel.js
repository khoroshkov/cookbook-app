const mongoose = require("mongoose");
const moment = require("moment");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add some title of your new perfect recipe"],
  },
  description: {
    type: String,
    required: [true, "Please add some ingridients or cooking method"],
  },
  createdAt: {
    type: Date,
    default: moment().format("LLL"),
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
