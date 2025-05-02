const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    personality: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
      default: "happy",
    },
    adopted: {
      type: Boolean,
      required: true,
      default: false,
    },
    adoption_date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("pets", petSchema);
