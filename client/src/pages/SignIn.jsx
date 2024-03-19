import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFromData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFromData({
      // operator to keep the form element (username, email...)
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Vérifie si les champs sont présent dans le formulaire
    const requiredFields = ["email", "password"];

    if (!requiredFields.every((field) => formData[field])) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (res.status === 404) {
        setError("Erreur");
        return;
      } else {
        navigate("/work-place");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="bg-dark10 max-w-md mx-auto my-12 text-slate-100 rounded-lg">
      <div className="flex justify-center gap-2 mx-9 ">
        <h1 className="text-2xl font-normal py-12">
          <span>Connexion</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid w-full items-center gap-3 ">
          <div className="flex flex-col space-y-1.5 mx-9">
            <label htmlFor="email" className="text-base font-normal ">
              Email *
            </label>
            <input
              type="email"
              placeholder="email"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="email"
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className=" flex flex-col space-y-1.5 mx-9">
            <label htmlFor="password" className="text-base  font-normal">
              Mot de passe *
            </label>
            <input
              type="password"
              placeholder="mot de passe"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="password"
              onChange={handleChange}
              autoCapitalize="new-password"
            />
          </div>
          <div className="flex flex-col gap-2 mx-9">
            <div className="flex gap-2 text-sm">
              <p className="text-slate-500">Pas de compte?</p>
              <Link to={"/sign-up"}>
                <span className="text-slate-400 hover:text-slate-600">
                  Inscription
                </span>
              </Link>
            </div>
            <div>
              {error && (
                <p className="text-red-400 text-base">
                  {error &&
                    "Erreur, quelque chose ne va pas dans votre saisie!"}
                </p>
              )}
            </div>
          </div>
          <div className=" flex flex-col gap-4 mx-9 mt-8 mb-3">
            <button className="bg-blue-600 p-2 rounded-lg uppercase hover:bg-blue-700">
              Se connecter avec Google
            </button>
          </div>
          <div disable={loading} className=" flex flex-col gap-4 mx-9 mb-9">
            <button className="bg-emerald-600 p-2 rounded-lg uppercase hover:bg-emerald-700">
              {loading ? "Loading..." : "CONNEXION"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
