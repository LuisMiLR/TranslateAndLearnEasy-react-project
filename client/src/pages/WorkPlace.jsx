import React from "react";

export default function WorkPlace() {
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
        <div className="grid grid-cols-2 gap-x-2 pb-4">
          <div className="bg-black-30 p-4 rounded-lg  focus:outline-none">
            <input
              type="text"
              placeholder="Saisir le text à traduire ici..."
              className=" bg-black-30 w-full py-16 text-gray-300 text-justify focus:outline-none  "
            />
          </div>
          <div className="bg-black-30 p-4 rounded-lg focus:outline-none"></div>
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
