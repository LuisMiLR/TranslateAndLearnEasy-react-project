import translator from "../configDL/config.js";
import Word from "../models/word.model.js";

export const translateText = async (req, res) => {
  try {
    const textToTranslate = req.body.text;
    console.log("Text à traduire:", textToTranslate);

    //The translateText method provided by the deepl-node package
    const result = await translator.translateText(textToTranslate, null, "fr"); //'fr' si a target language

    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la traduction avec DeepL:", error);
    res.status(500).send("Erreur lors de la traduction avec DeepL");
  }
};

export const saveWord = async (req, res, next) => {
  try {
    const { original, translation } = req.body;
    //create a new instance of model Word
    const newWord = new Word({ original, translation });

    //valid data only
    await newWord.validate();
    //save the new word
    await newWord.save();
    //send response OK
    res.status(201).json({ message: " word saved successfully" });
  } catch (error) {
    next(error);
  }
};
