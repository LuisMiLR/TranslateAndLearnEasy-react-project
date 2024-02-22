import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-900 shadow-md  ">
      <div className="flex justify-between items-center p-5">
        <Link to="/">
          <h1 className="font-bolt text-sm sm:text-xl flex flex-wrap ml-5">
            <span className="text-slate-400">Translate& </span>
            <span className="text-orange-400">LearnEasy</span>
          </h1>
        </Link>
        <ul className="text-slate-400 flex gap-4 mr-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/Sign-in">
            <li className="hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
