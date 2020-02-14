const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const dragonSchema = new Schema({
  name: String,
  location: String,
  kewlFactor: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  image: String,
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

const Dragon = model("Dragon", dragonSchema);
module.exports = Dragon;
