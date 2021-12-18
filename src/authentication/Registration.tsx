import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import SocialMediaLogin from "./SocialMediaLogin";
import { FirebaseError } from "firebase/app";

const Registration: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const register = async () => {
    if (password === password2) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/exercises", { replace: true });
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/invalid-email":
              setErrorMessage("Wpisz poprawny adres email");
              break;
            case "auth/weak-password":
              setErrorMessage("Hasło musi mieć przynajmniej 6 znaków!");
              break;
            case "auth/email-already-in-use":
              setErrorMessage("Podany email istnieje już w systemie.");
              break;
          }
          console.log(error.code);
          console.log(error.message);
        }
      }
    } else {
      setErrorMessage("Hasła muszą być identyczne");
    }
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
        <div className="flex justify-center p-2 text-xs">
          <p>
            {" "}
            Tworząc konto, zgadzasz się na <a>politykę prywatności </a>
            oraz <a> warunki korzystania</a> CodeGarden.
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
        {errorMessage ? (
          <div className="text-red-600 text-center">{errorMessage}</div>
        ) : null}
        <SocialMediaLogin setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
};

export default Registration;
