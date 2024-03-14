import React, { useState, useEffect } from "react";

export default function WorkPlace() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  let typingTimeout = null;

  const handleInput = async (e) => {
    const text = e.target.value;
    setInputText(text);

    clearTimeout(typingTimeout); //cancels the input timer

    typingTimeout = setTimeout(() => {
      translate(text); //run translate text
    }, 1000); //one second
  };

  const translate = async (textToTranslate) => {
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
        setTranslatedText(data.text);
      } else {
        throw new Error("Erreur lors de la traduction");
      }
    } catch (error) {
      console.log("Erreur serveur de traduction:", error.message);
    }
  };

  return (
    <div>
      <section className="bg-dark  max-w-6xl mx-auto h-100 pt-4 px-4 mt-20 rounded-lg">
        <div text-slate-100>
          <div className="mx-auto flex justify-between pb-2">
            <p className="text-base  text-slate-100 pl-4 text-justify">
              Anglais
            </p>
            <p className="text-base  text-slate-100 pr-4 text-justify">
              Français
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2  pb-4">
          <div className="bg-black-30 p-6 rounded-lg  focus:outline-none">
            <input
              type="text"
              placeholder="Saisie le texte à traduire..."
              className=" bg-black-30 w-full py-16 text-gray-300 text-justify focus:outline-none  "
              value={inputText}
              onChange={handleInput}
            />
          </div>
          <div className="bg-black-30 p-6 rounded-lg flex items-center focus:outline-none">
            {translatedText}
          </div>
        </div>
      </section>
      <section>
        <div className=" flex justify-center py-8">
          <div className="bg-gradient-to-r from-purple100 to-orange-600 max-w-7xl mx-auto flex p-9 mt-8 justify-center rounded-lg text-base">
            <h2>Bienvenu dans ton espace d'apprentissage</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
