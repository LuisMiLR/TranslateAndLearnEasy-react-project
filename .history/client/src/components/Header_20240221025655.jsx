import React from "react";

export default function Header() {
  return (
    <header className="bg-neutral-900 shadow-md flex justify-between items-center ">
      <h1 className="font-bolt text-sm sm:text-xl flex flex-wrap">
        <span className="text-slate-400">Translate& </span>
        <span className="text-orange-400">LearnEasy</span>
      </h1>
    </header>
  );
}
