import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import imageTest2 from "../assets/images/imageTest2.png";
import evolutionRang from "../assets/images/evolutionRang.png";
import PulseButton from "../components/ui/PulseButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section>
        <WavyBackground
          colors={["#1E34FA", "#594980 ", "#866cc7", "#FF5630"]}
          className="max-w-4xl mx-auto pb-20"
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-slate-100 font-bold inter-var text-center">
            Plonge dans la maitrise de l'Anglais
          </h1>
          <p className="text-base md:text-lg mt-8 text-slate-100 font-normal inter-var text-center">
            L'apprentissage dynamique des mots dont tu as besoin !
          </p>
        </WavyBackground>
      </section>

      <section className="text-slate-100 mb-7 ">
        <div className="flex flex-row bg-gradient-to-r from-purple100 to-purple-70 max-w-7xl mx-auto h-100 py-16 pl-16 rounded-lg">
          <div className="flex flex-col items-start  mr-28">
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
                  Il te permet de mémoriser les termes que tu cherches dans le
                  traducteur grace à un systeme ingénieux d'apprentissage.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl pt-6 pb-15">
                Lance toi maintenant et découvre comment t'as courbe
                d'aprentissage évolue rapidement
              </p>
            </div>
            <Link to="/Sign-up">
              <div className="flex  justify-center pt-10 ">
                <PulseButton>commencer</PulseButton>
              </div>
            </Link>
          </div>
          <div>
            <img
              className=" h-80 w-full object-cover  opacity-80 border-2 rounded-lg  border-gray-500 "
              src={imageTest2}
              alt="dashboard"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto grid grid-cols-5 gap-x-7 text-slate-100 mb-7">
        <div className="col-span-2 rounded-lg bg-dark py-16 px-16">
          {/* Contenu du premier conteneur, 40% de largeur */}
          <h2 className="text-4xl font-semibold pb-8">
            Mémorise tout le nouveau vocabulaire
          </h2>
          <p className="text-xl">
            De nombreuses études linguistiques recommandent de connaître entre
            3000 et 5000 mots pour une compréhension courante de l'Anglais. Le
            système dynamique de gamification va te permettre d'apprendre
            durablement les nouveaux termes que tu recherches dans le
            traducteur. Tu vas pouvoir t'entraîner et mesurer t'as courbe
            d'apprentissage
          </p>
        </div>
        <div className="col-span-3 rounded-lg bg-dark ">
          {/* Contenu du deuxième conteneur, 60% de largeur */}
          <h2 className="text-4xl font-semibold pb-8 py-16 px-16">
            Gagne des rangs de progression et d'évolution
          </h2>
          <p className="text-xl pb-16 px-16">
            Les défis d'apprentissages et de révisions classent tes performances
            et ta progression, améliore ton profil et pousse tes compétences en
            Anglais vers le nouveau niveau supérieur
          </p>
          <div className="col-span-4 w-full ">
            <img
              src={evolutionRang}
              alt="rang de progression d'apprentissage coloré"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
