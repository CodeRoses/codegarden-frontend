import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import SocialMediaLogin from "./SocialMediaLogin";
import { FirebaseError } from "firebase/app";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();
  const login = async () => {
    try {
      setErrorMessage("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/exercises", { replace: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-email":
            setErrorMessage("Wpisz poprawny adres email");
            break;
          case "auth/user-not-found":
            setErrorMessage(
              "Nie znaleziono użytkownika o podanym adresie email"
            );
            break;
          case "auth/wrong-password":
            setErrorMessage("Podane hasło jest nieprawidłowe");
            break;
        }
        console.log(error.code);
        console.log(error.message);
      }
    }
  };
  return (
    <div className="bg-gray-300 flex max-w-4xl flex-col rounded-lg border-l-4 border-pink-400 items-center w-1/4 m-auto">
      <div className="p-3 pt-6 text-dim-lilac w-11/12">
        <p className="text-5xl font-normal text-center">Zaloguj się</p>
        <div className="flex justify-end p-2">
          <p>nie masz konta?</p>
          <Link to="/registration" className="text-pink-400 ml-1">
            Zarejestruj się
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
              placeholder="Hasło"
            />
          </div>
          {errorMessage ? (
            <div className="text-red-600">{errorMessage}</div>
          ) : null}
        </div>

        <div className="bg-pink-400 rounded-lg p-2 text-dim-lilac my-5 w-1/2 flex m-auto justify-center">
          <button
            type="button"
            className="text-xl font-bold w-full"
            onClick={() => login()}
          >
            Zaloguj
          </button>
        </div>

        <SocialMediaLogin setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
};

export default Login;
