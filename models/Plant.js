// NAME OF FILE IS CAPITAL AND SINGULAR BECAUSE IT IS A MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, default: "unknown" },
  caretaking: { type: String, default: "Some water and some sun" },
  img: { type: String, default: "no image provided" },
  description: {
    type: String,
    default: "What did the young plant say to the old plant? - Ok, bloomer.",
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
