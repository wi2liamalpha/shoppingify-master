const mongoose = require("mongoose");
const itemList = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Item", itemList);
