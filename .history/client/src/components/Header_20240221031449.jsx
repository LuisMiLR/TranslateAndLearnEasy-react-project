import { FaSignInAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-neutral-900 shadow-md  ">
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bolt text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-400">Translate& </span>
          <span className="text-orange-400">LearnEasy</span>
        </h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
        <div className="">
          <FaSignInAlt className="text-slate-400 size-6" />
        </div>
      </div>
    </header>
  );
}