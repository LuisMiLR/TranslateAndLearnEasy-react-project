import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import imageTest2 from "../assets/images/imageTest2.png";
import PulseButton from "../components/ui/PulseButton";

export default function Home() {
  return (
    <div>
      <section>
        <WavyBackground
          colors={["#1E34FA", "#594980 ", "#866cc7", "#FF5630"]}
          className="max-w-4xl mx-auto pb-40"
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-slate-100 font-bold inter-var text-center">
            Plonge dans la maitrise de l'Anglais
          </h1>
          <p className="text-base md:text-lg mt-8 text-slate-100 font-normal inter-var text-center">
            L'apprentissage dynamique des mots dont tu as besoin !
          </p>
        </WavyBackground>
      </section>

      <section className="mb-10 text-slate-100 ">
        <div className="flex flex-row bg-gradient-to-r from-purple100 to-blue-70 max-w-7xl mx-auto h-100 py-16 pl-16 rounded-lg">
          <div className="flex flex-col items-start mr-10 pr-10   ">
            <h2 className="text-4xl font-semibold pb-8">
              Améliore tes compétences en Anglais
            </h2>
            <div>
              <div>
                <p className="text-xl ">
                  Utilise notre méthode dynamique est axé sur le meilleur
                  traducteur de mots Anglais - Français.
                </p>
                <p className="text-xl ">
                  Il va te permettre de mémoriser les termes que tu cherches
                  dans le traducteur grace à un systeme ingénieux
                  d'apprentissage.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl pt-6 pb-15">
                Lance toi maintenant et découvre comment t'as courbe
                d'aprentissage évolue rapidement
              </p>
            </div>
            <div className="flex  justify-center pt-10">
              <PulseButton>commencer</PulseButton>
            </div>
          </div>
          <div>
            <img
              className="h-80 w-full object-cover  opacity-80 border-2 rounded-lg  border-gray-400 "
              src={imageTest2}
              alt="dashboard"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
