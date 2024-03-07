import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black-100 border-b border-gray-700 shadow-md  ">
      <div className="flex justify-between items-center p-6">
        <Link to="/">
          <h1 className="font-bolt text-base sm:text-2xl flex flex-wrap ml-5">
            <span className="text-slate-100">Translate& </span>
            <span className="text-orange-500">LearnEasy</span>
          </h1>
        </Link>
        <ul className="text-gray-400 flex gap-5 mr-5">
          <Link to="/">
            <li className="hidden sm:inline hover:text-slate-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:text-slate-200">About</li>
          </Link>
          <Link to="/Sign-in">
            <li className="hover:text-slate-200">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
