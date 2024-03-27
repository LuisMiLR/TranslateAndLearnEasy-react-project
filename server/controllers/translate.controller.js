import translator from "../configDL/config.js";
import Word from "../models/word.model.js";

export const translateText = async (req, res) => {
  try {
    const textToTranslate = req.body.text;
    console.log("Text à traduire:", textToTranslate);

    //The translateText method provided by the deepl-node package
    const result = await translator.translateText(textToTranslate, null, "fr");
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la traduction avec DeepL:", error);
    res.status(500).send("Erreur lors de la traduction avec DeepL");
  }
};

//save word in database
export const saveWord = async (req, res, next) => {
  try {
    const { original, translation } = req.body;

    //check data in req.body
    if (!original || !translation) {
      // if one of the terms is not present, send an error
      throw new Error("Les champs original et translation sont requis");
    }

    //check length word < 20
    if (original.length > 20 || translation.length > 20) {
      throw new Error("La longueur maximal du mot est dépassé");
    }

    //Check data format (e.g. alphabetical characters only)
    const wordRegex = /^[A-Za-z'-]+$/;
    if (!wordRegex.test(original) || !wordRegex.test(translation)) {
      throw new Error(
        "verifier les caractères que vous avez saisies, certain ne sont pas accèpter"
      );
    }

    // if all ok >> create a new instance of model Word
    const newWord = new Word({ original, translation });
    //valid data only
    await newWord.validate();
    //save the new word
    await newWord.save();
    //send response as successfull
    res.status(201).json({ message: " word saved successfully" });
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
};
