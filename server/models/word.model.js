import mongoose from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      require: [true, "Le champs original est obligatoire"],
      unique: true,
    },
    translation: {
      type: String,
      require: [true, "Le champs translation est obligatoire"],
      unique: true,
    },
  },
  { timestamps: true }
);
const Word = mongoose.model("Word", wordSchema);
export default Word;
