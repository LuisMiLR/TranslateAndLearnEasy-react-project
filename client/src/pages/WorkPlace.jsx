import React, { useState, useEffect } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowUpZA } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { FaBuffer } from "react-icons/fa6";
import { translate, sendDataToBackend } from "../api/translation";

export default function WorkPlace() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  let typingTimeout = null;

  const handleInput = async (e) => {
    const text = e.target.value;
    setInputText(text);

    clearTimeout(typingTimeout); //cancels the input timer

    typingTimeout = setTimeout(() => {
      postTranslation(text); //run translate text
    }, 1000);
  };

  const postTranslation = async (textToTranslate) => {
    try {
      const translated = await translate(textToTranslate);
      setTranslatedText(translated);
    } catch (error) {
      console.log("Erreur serveur de traduction:", error);
    }
  };

  return (
    <div>
      <div className=" bg-black-900 max-w-7xl mx-auto h-auto flex-col pb-16 mt-8 rounded-lg">
        <div className="flex flex-row bg-gradient-to-r from-black-920 via-hippieblue-500 to-hippieblue-600  max-w-7xl mx-auto py-16 rounded-t-lg">
          <div className="flex max-w-6xl mx-20 text-slate-100 text-base">
            <div className="flex mr-2 pt-1">
              <FaBuffer size="25px" color="#f1f5f9" />
            </div>
            <h1 className="text-xl font-normal mt-1 pr-4">
              Workplace Translate&LearnEasy
            </h1>
          </div>
          <div className=" max-w-6xl text-slate-100 mx-auto mt-4">
            <div className="text-2xl">
              <p>La meilleur manière d'apprendre l'Anglais</p>
            </div>
            <div className="text-2xl pb-3 font-normal">
              <p>C'est de retenir le vocabulaire dont tu as besoin</p>
            </div>
          </div>
        </div>
        <section className="max-w-6xl mx-auto">
          <h2 className="mt-8 ml-2 text-2xl">Translator</h2>
          <div className=" py-3 px-24 mt-8 rounded-lg  bg-black-990 border border-black-910">
            <div className=" grid grid-cols-2 gap-x-1">
              <div className=" flex rounded-lg focus:outline-none">
                <input
                  type="text"
                  placeholder=" Saisie le texte à traduire..."
                  className=" bg-black-990 w-full h-52 pl- pb-20 rounded-lg text-lg focus:outline-none"
                  value={inputText}
                  onChange={handleInput}
                />
              </div>
              <div className="bg-black-990 p-6 ml-14 pt-12 rounded-lg text-lg focus:outline-none">
                {translatedText}
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-16 mt-8 pb-16 flex justify-items-start">
          <div className=" flex flex-row justify-center h-30">
            <button
              onClick={() => sendDataToBackend(inputText, translatedText)}
              className="bg-hippieblue-400 max-w-7xl h-14 mx-auto mr-4 flex  items-center p-2 rounded-lg text-base hover:bg-hippieblue-300"
            >
              <div className="bg-cyan-600  flex p-2 rounded-lg">
                <FaArrowUpZA size="2em" color="white" />
              </div>
              <p className="ml-2 text-slate-100">Add to list</p>
            </button>
            <button className="bg-hippieblue-400 max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3 rounded-lg text-base hover:bg-hippieblue-300">
              <div className="bg-cyan-600  flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <p className="ml-2 text-slate-100">Learn words</p>
            </button>
            <button className="bg-mako-900 max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3 rounded-lg text-base hover:bg-mako-600 ">
              <div className="bg-black-1000 flex p-2 rounded-lg">
                <FaChartColumn size="2em" color="white" />
              </div>
              <p className="ml-2 text-slate-100">Dashboard</p>
            </button>
          </div>
        </section>
        <section className>
          <h2 className="mx-16 text-2xl pb-8">Learning</h2>
          <div className="bg-dblue-950 max-w-6xl mx-auto h-36 flex rounded-lg ">
            <div className="w-2/3 p-4">
              <p className>Fait grandir ton vocabulaire en anglais</p>
            </div>
            <div className="w-1/3 h-36">
              <img className=" rounded-lg object-scale-down" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
