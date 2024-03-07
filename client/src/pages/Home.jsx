import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";

export default function Home() {
  return (
    <div>
      <WavyBackground
        colors={["#1E34FA", "#FF5630", "#FF8731", "#1E34FA", "#FF5630"]}
        className="max-w-4xl mx-auto pb-40"
      >
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-slate-100 font-bold inter-var text-center">
          Plongez dans la maitrise de l'Anglais
        </h1>
        <p className="text-base md:text-lg mt-4 text-slate-100 font-normal inter-var text-center">
          L'apprentissage dynamique des mots dont vous avez besoin !
        </p>
      </WavyBackground>
    </div>
  );
}
