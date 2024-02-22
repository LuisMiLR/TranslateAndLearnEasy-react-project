import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-900 shadow-md  ">
      <div className="flex justify-between items-center p-3">
        <link to="/" />
        <h1 className="font-bolt text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-400">Translate& </span>
          <span className="text-orange-400">LearnEasy</span>
        </h1>
        <ul className="text-slate-400 flex gap-4">
          <li className="hidden sm:inline hover:underline">Home</li>
          <li className="hidden sm:inline hover:underline">About</li>
          <li className="hidden sm:inline hover:underline">Sign in</li>
        </ul>
      </div>
    </header>
  );
}