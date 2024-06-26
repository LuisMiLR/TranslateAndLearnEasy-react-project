import React, { useState, useEffect } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowUpZA } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { FaBuffer } from "react-icons/fa6";
import { translate, sendDataToBackend } from "../api/translation";
import { useNavigate } from "react-router-dom";

export default function WorkPlace() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleSaveTerm = async () => {
    try {
      //check input fields
      if (!inputText.trim() || !translatedText.trim()) {
        setError("Veuillez remplir tous les champs"); // error message
        return;
      }
      //Check data format (e.g. alphabetical characters only)
      const wordRegex = /^[A-Za-z'-]+$/;
      if (!wordRegex.inputText || !wordRegex.translatedText)
        setError("Veuillez remplir des caractères valides");

      //send data to backend if check input as successfull
      const response = await sendDataToBackend(inputText, translatedText);
      //check save successfull
      if (response && response.message === "word saved successfully") {
        //reset input field after successful save
        setInputText("");
        setTranslatedText("");
        setError(""); // reset error if save is ok
        setSuccessMessage(response.message);
      }
    } catch (error) {
      console.log("Erreur lors de l'enregistrement du terme", error);
      setError("Erreur lors de l'enregistrement du terme");
    }
  };

  return (
    <div>
      <div className=" bg-black-900 max-w-7xl mx-auto h-auto flex-col pb-16 mt-8 rounded-lg">
        <div className="flex flex-row bg-gradient-to-r from-sky-300  to-sky-600  max-w-7xl mx-auto py-16 rounded-t-lg">
          <div className="flex max-w-6xl mx-16 text-base">
            <div className="flex mr-2 pt-1">
              <FaBuffer size="25px" color="#f1f5f9" />
            </div>
            <h1 className="text-xl mt-1 text-slate-100 pr-4">
              Workplace Translate&LearnEasy
            </h1>
          </div>
          <div className=" max-w-6xl mx-auto mt-4">
            <div className="text-2xl text-slate-100">
              <p>La meilleur manière d'apprendre l'Anglais</p>
            </div>
            <div className="text-2xl pb-3 font-normal text-slate-100">
              <p>C'est de retenir le vocabulaire dont tu as besoin</p>
            </div>
          </div>
        </div>
        <section className="max-w-6xl mx-auto">
          <h2 className="mt-8 ml-2 text-2xl">Translator</h2>
          <div className=" py-3 px-24 mt-8 rounded-lg  bg-mako-950  border border-black-910">
            <div className=" grid grid-cols-2 gap-x-1">
              <div className=" flex rounded-lg focus:outline-none">
                <input
                  type="text"
                  placeholder=" Saisie le texte à traduire..."
                  className=" bg-mako-950  w-full h-52 pb-20 rounded-lg text-lg focus:outline-none"
                  value={inputText}
                  onChange={handleInput}
                />
              </div>
              <div className="bg-mako-950 p-6 ml-14 pt-12 rounded-lg text-lg focus:outline-none">
                {translatedText}
              </div>
              <div>
                {error && <p className="text-red-400 text-base">{error}</p>}
                {successMessage && ( //bug a corriger le message ne s'affiche pas
                  <p className="text-green-600">super{successMessage}</p>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-16 mt-8 pb-16 flex justify-items-start">
          <div className=" flex flex-row justify-center h-30">
            <button
              onClick={handleSaveTerm}
              className="bg-sky-400 max-w-7xl h-14 mx-auto mr-4 flex  items-center p-2 rounded-lg text-base hover:bg-sky-300"
            >
              <div className="bg-sky-700  flex p-2 rounded-lg">
                <FaArrowUpZA size="2em" color="white" />
              </div>
              <p className="ml-2 text-slate-100">Add to list</p>
            </button>
            <button className="bg-sky-400 max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3 rounded-lg text-base hover:bg-sky-300">
              <div className="bg-sky-700  flex p-2 rounded-lg">
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
        <section>
          <h2 className="mx-16 text-2xl pb-8">Learning</h2>
          <div className="grid grid-cols-4 max-w-6xl mx-auto h-52 mb-7 gap-x-7">
            <div className="grid-col-span-3 col-start-1 col-end-4 rounded-lg bg-black-1000">
              <p className="text-2xl text-slate-100 pt-12 pb-4 mx-14">
                Fait grandir ton vocabulaire de manière simple
              </p>
              <p className="text-lg text-slate-100 mx-14 ">
                Révise les termes appris et gagne des points de connaissances.
                La clé du succès est régularité Communique de manière aisée en
                atteignant les 6000 mots de vocabulaire
              </p>
            </div>
            <div className="grid-col-span-1 col-start-4 rounded-lg items-center justify-center bg-sky-700 ">
              bannerImage
            </div>
          </div>
          <div className="max-w-6xl mx-auto h-[400px] grid grid-cols-4 gap-7">
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 border border-gray-800 hover:bg-sky-400">
              <div className="  text-2xl font-normal text-slate-100">
                Last 10 words
              </div>
            </button>
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 hover:bg-sky-400">
              <div className="  text-2xl font-normal text-slate-100">
                Last 20 words
              </div>
            </button>
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 hover:bg-sky-400">
              <div className="  text-2xl text-slate-100">Last 50 words</div>
            </button>
            <div className="row-span-2 rounded-lg bg-black-1000">item4</div>
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 hover:bg-sky-400">
              <div className="  text-2xl text-slate-100">Last 125 words</div>
            </button>
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 hover:bg-sky-400">
              <div className="  text-2xl text-slate-100">Random all words</div>
            </button>
            <button className=" flex justify-center items-center rounded-lg bg-mako-900 hover:bg-sky-400">
              <div className="  text-2xl text-slate-100">List of words</div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
