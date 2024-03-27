export const translate = async (textToTranslate) => {
  try {
    const response = await fetch("/server/translate/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textToTranslate }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data.text;
    } else {
      throw new Error("Erreur lors de la traduction");
    }
  } catch (error) {
    console.log("Erreur serveur de traduction:", error.message);
  }
};

export const sendDataToBackend = async (inputText, translatedText) => {
  try {
    const response = await fetch("/server/translate/saveWord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        original: inputText,
        translation: translatedText,
      }),
    });
    console.log("log response data", response);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //response server
    } else {
      throw new Error("Erreur lors de la sauvegarde du mot");
    }
  } catch (error) {
    console.error("erreur lors de la requette vers le backend:", error.message);
  }
};
