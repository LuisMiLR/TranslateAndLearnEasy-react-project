import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-dark max-w-md mx-auto my-7  text-slate-100 rounded-lg ">
      <h1 className="text-2xl font-normal text-center p-9">S'INSCRIRE</h1>
      <form className="flex flex-col">
        <div className="grid w-full items-center gap-3 ">
          <div className="flex flex-col space-y-1 mx-9 ">
            <label htmlFor="name" className="text-base  font-normal ">
              Pseudo
            </label>
            <input
              type="text"
              placeholder="nom utilisateur"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="username"
            />
          </div>
          <div className="flex flex-col space-y-1 mx-9">
            <label htmlFor="email" className="text-base font-normal ">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="email"
            />
          </div>
          <div className=" flex flex-col space-y-1 mx-9">
            <label htmlFor="password" className="text-base  font-normal">
              Mot de passe
            </label>
            <input
              type="text"
              placeholder="mot de passe"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="password"
            />
          </div>
          <div className="flex justify-center gap-2">
            <p>J'ai déjà un compte?</p>
            <Link to={"/sign-in"}>
              <span className="text-orange-400">Connexion</span>
            </Link>
          </div>
          <div className=" flex flex-col gap-4 mx-9 mt-9 mb-3">
            <button className="bg-blue-600 p-2 rounded-lg uppercase hover:bg-blue-700">
              Se connecter avec Google
            </button>
          </div>
          <div className=" flex flex-col gap-4 mx-9 mb-9">
            <button className="bg-emerald-600 p-2 rounded-lg uppercase hover:bg-emerald-700">
              Inscription
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
