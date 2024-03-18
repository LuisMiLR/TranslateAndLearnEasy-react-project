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
      <div className=" bg-dark10 max-w-7xl mx-auto h-auto pb-16 mt-8 rounded-lg">
        <div className="flex flex-row bg-gradient-to-r from-dblue-600 to-black-100 max-w-7xl mx-auto py-16 rounded-t-lg">
          <div className="flex max-w-6xl mx-auto text-base">
            <div className="flex mr-2 pt-1">
              <FaBullseye size="25px" color="#cbd5e1" />
            </div>
            <h2 className="text-xl font-normal mt-1 pr-4">
              Workplace Translate&LearnEasy
            </h2>
          </div>
          <div className=" max-w-6xl mx-auto mt-4">
            <div className="text-2xl font-normal text-slate-100">
              <h1>La meilleur manière d'apprendre l'Anglais</h1>
            </div>
            <div className="text-2xl pb-3 font-normal text-slate-100">
              <p>C'est de retenir le vocabulaire dont tu as besoin</p>
            </div>
          </div>
        </div>
        <section className="max-w-6xl  mx-auto h- py-3 px-28 pb-  mt-8 rounded-lg  bg-dark border-2  border-gray-800">
          <div className=" text-gray-400  ">
            <div className=" pb- flex justify-around ">
              <p className="text-sm ">Anglais</p>
              <p className="text-sm ">Français</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1">
            <div className=" flex rounded-lg focus:outline-none">
              <input
                type="text"
                placeholder="Texte à traduire..."
                className=" bg-dark w-full h-52 pl-4 pb-20 rounded-lg text-lg focus:outline-none"
                value={inputText}
                onChange={handleInput}
              />
            </div>
            <div className="bg-dark p-6 pt-12 rounded-lg text-lg focus:outline-none">
              {translatedText}
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto mt-4 flex justify-items-start">
          <div className=" flex flex-row justify-center h-30">
            <button className="bg-dblue-400 max-w-7xl h-14 mx-auto mr-4 flex  items-center p-2 rounded-lg text-base hover:opacity-60">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpZA size="2em" color="white" />
              </div>
              <p className="ml-2">Add to list</p>
            </button>
            <button className="bg-dblue-500 max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3 rounded-lg text-base hover:opacity-80">
              <div className="bg-blue-950 flex p-2 rounded-lg">
                <FaArrowUpRightDots size="2em" color="white" />
              </div>
              <p className="ml-2">Learn words</p>
            </button>
            <button className="bg-dblue-600 max-w-7xl h-14  mx-auto mr-4 flex  items-center p-3 rounded-lg text-base hover:opacity-80">
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
