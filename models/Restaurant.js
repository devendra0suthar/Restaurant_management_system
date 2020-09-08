const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3443,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  menus: {
    type: [{ type: mongoose.Types.ObjectId, required: true, ref: "Menu" }],
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
