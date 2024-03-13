import translator from "../configDL/config.js";

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
