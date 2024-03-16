import React, { useState, useEffect } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowUpZA } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";

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
      <div className=" bg-dark  max-w-7xl mx-auto h- pb-16 mt-8 rounded-lg border-2 border-dark">
        <div className="flex  max-w-6xl mx-auto  ">
          <div className=" max-w-62  pl-2 pb-1 flex justify-center mt-8  rounded-lg text-base">
            <div className="flex items-start mr-4 rounded-lg pt-1">
              <FaBullseye size="1rem" color="#9ca3af" />
            </div>
            <h2 className="text-base text-center text-gray-400  pr-4 ">
              Workplace Translate&LearnEasy
            </h2>
          </div>
          <div className="flex justify-center text-base text-slate-100 ">
            <p></p>
          </div>
        </div>
        <section className="bg-gradient-to-r from-gray-500 to-gray-500 max-w-6xl mx-auto h-100 pt-2 px-4 my-6 rounded-lg">
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
          <div className="grid grid-cols-2 gap-x-1  pb-4">
            <div className="bg-black-30 opacity-85 p-6 rounded-lg  focus:outline-none">
              <input
                type="text"
                placeholder="Saisie le texte à traduire..."
                className=" bg-black-30 w-full py-32 text-gray-100 text-justify focus:outline-none  "
                value={inputText}
                onChange={handleInput}
              />
            </div>
            <div className="bg-black-30 opacity-85 p-6 rounded-lg flex items-center focus:outline-none">
              {translatedText}
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto flex justify-items-start">
          <div className=" flex flex-row justify-center   h-30">
            <div className="bg-purple50  max-w-7xl mx-auto mr-4  flex  items-center p-3   rounded-lg text-base">
              <div className="bg-purple70 flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <h2 className="ml-2">Learn words</h2>
            </div>
            <div className="bg-blue-600  opacity-80 max-w-7xl mx-auto mr-4 flex  items-center p-3    rounded-lg text-base">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpZA size="2em" color="white" />
              </div>
              <h2 className="ml-2">Pratices</h2>
            </div>
            <div className="bg-rankblue max-w-7xl mx-auto mr-4 flex  items-center p-3     rounded-lg text-base">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <h2 className="ml-2">Dashboard</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
