import React, { useState, useEffect } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowUpZA } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaBuffer } from "react-icons/fa6";

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
      <div className=" bg-dark max-w-7xl mx-auto h-auto pb-16 mt-10 rounded-lg">
        <div className="flex max-w-6xl mx-auto">
          <div className="pb-1 mt-8 flex text-base">
            <div className="flex mr-2 pt-1">
              <FaBullseye size="25px" color="#94a3b8" />
            </div>
            <h2 className="text-xl font-normal text-slate-400 mt-1 pr-4 ">
              Workplace Translate&LearnEasy
            </h2>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto mt-4">
          <div className="text-2xl font-normal  text-slate-100 ">
            <h1>La meilleur façon d'apprendre l'Anglais</h1>
          </div>
          <div className="text-2xl font-normal  text-slate-100 ">
            <p>C'est de retenir le vocabulaire dont tu as besoin</p>
          </div>
        </div>
        <section className="max-w-6xl h-100 mx-auto py-2 px-6 my-8 rounded-lg bg-sky-800 ">
          <div className=" text-slate-100  ">
            <div className=" pb-1 flex justify-between">
              <p className="text-base text-slate-100 pl-4 ">Anglais</p>
              <p className="text-base text-slate-100 pr-4 ">Français</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1">
            <div className="bg-slate-700 flex rounded-lg focus:outline-none">
              <input
                type="text"
                placeholder="Texte à traduire..."
                className=" bg-slader10 w-full h-36 pl-2 pb-10 rounded-lg  text-gray-100 text-justify focus:outline-none  "
                value={inputText}
                onChange={handleInput}
              />
            </div>
            <div className="bg-slader10  p-6 rounded-lg flex items-center focus:outline-none">
              {translatedText}
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto flex justify-items-start">
          <div className=" flex flex-row justify-center h-30">
            <button className="bg-purple50  max-w-7xl h-14  mx-auto mr-4  flex  items-center p-3   rounded-lg text-base">
              <div className="bg-purple70 flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <p className="ml-2">Learn words</p>
            </button>
            <button className="bg-blue-600  opacity-80 max-w-7xl h-14 mx-auto mr-4 flex  items-center p-2 rounded-lg text-base">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpZA size="2em" color="white" />
              </div>
              <p className="ml-2">Pratices</p>
            </button>
            <button className="bg-rankblue max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3     rounded-lg text-base">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <p className="ml-2">Dashboard</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
