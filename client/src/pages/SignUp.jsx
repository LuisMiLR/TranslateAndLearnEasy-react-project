import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // operator to keep the form element (username, email...)
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Vérifier si les champs sont présent dans le formulaire
    const requiredFields = ["username", "email", "password"];

    if (!requiredFields.every((field) => formData[field])) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (res.status === 500) {
        setError("Erreur, inscription impossible");
        return;
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="bg-dark-10 max-w-md mx-auto my-12 text-slate-100 rounded-lg">
      <div className="flex justify-center gap-2 mx-9 ">
        <h1 className="text-2xl font-normal py-12">
          Inscription <span className="text-slate-100">Translate</span>
          <span className="text-dblue-400">&LearnEasy</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid w-full items-center gap-3 ">
          <div className="flex flex-col space-y-1.5 mx-9 ">
            <label htmlFor="username" className="text-base  font-normal ">
              Pseudo *
            </label>
            <input
              type="text"
              placeholder="nom utilisateur"
              className="bg-black-80  p-2 rounded-lg focus:outline-none "
              id="username"
              onChange={handleChange}
              autoComplete="username"
            />
          </div>
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
              <p className="text-slate-500">J'ai déjà un compte?</p>
              <Link to={"/sign-in"}>
                <span className="text-slate-400 hover:text-slate-600">
                  Connexion
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
          <div disabled={loading} className=" flex flex-col gap-4 mx-9 mb-9">
            <button className="bg-emerald-600 p-2 rounded-lg uppercase hover:bg-emerald-700">
              {loading ? "Loading..." : "INSCRIPTION"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
