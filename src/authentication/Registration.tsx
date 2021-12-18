import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import SeparatorWithText from "../SeparatorWithText";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Registration: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const register = () => {
    navigate("/exercises", { replace: true });
  };

  return (
    <div className="bg-gray-300 flex max-w-4xl flex-col rounded-lg border-l-4 border-pink-400 items-center w-1/4 m-auto">
      <div className="p-3 pt-6 text-dim-lilac w-11/12">
        <p className="text-5xl font-normal text-center">Rejestracja</p>
        <div className="flex justify-end p-2">
          <p>masz już konto?</p>
          <Link className="text-pink-400 ml-1" to="/login">
            Zaloguj się
          </Link>
        </div>

        <div className="flex flex-col items-center px-10">
          <div className="flex flex-col items-center w-full">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              name="email"
              className="mb-3 rounded-lg p-2 w-full"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <label htmlFor="password" className="self-start">
              Hasło
            </label>
            <input
              name="password"
              className="rounded-lg p-2 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder=""
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <label htmlFor="password" className="self-start">
              Powtórz hasło
            </label>
            <input
              name="password"
              className="rounded-lg p-2 w-full"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.currentTarget.value)}
              placeholder=""
            />
          </div>
        </div>
        <div>
          <p className="text-black-600/50 text-xs">
            {" "}
            Tworząc konto, zgadzasz się na <a>politykę prywatności</a>
            oraz <a>warunki korzystania</a> CodeGarden.
          </p>
        </div>

        <div className="bg-pink-400 rounded-lg p-2 text-dim-lilac my-5 w-1/2 flex m-auto justify-center">
          <button
            type="button"
            className="text-xl font-bold w-full"
            onClick={() => register()}
          >
            Zarejestruj mnie
          </button>
        </div>

        <div className="flex flex-col text-dim-lilac my-3">
          <SeparatorWithText
            textContent="lub zaloguj się przez"
            className="border-dim-lilac"
            backgroundColor="bg-gray-300"
          />
          <div className="flex flex-row justify-evenly pt-7">
            <AiFillFacebook color="#4267B2" size={50} />
            <FcGoogle size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
