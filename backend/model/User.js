const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Fixed: changed 'require' to 'required'
      trim: true,
    },
    email: {
      type: String,
      required: true, // Fixed: changed 'require' to 'required'
      trim: true,
      unique: true,   // Fixed: changed 'unique' to true
    },
    password: {
      type: String,
      required: true, // Fixed: changed 'require' to 'required'
      trim: true,
    },
    imageProfile: {
      type: String,
      default: "../images/image.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Fixed: Moved this to the second argument object
  }
);

const User = mongoose.model("User", userSchema); // Capitalizing 'User' is a standard best practice

module.exports = User; // Optional: Export it so you can use it in other files