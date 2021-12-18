import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import SeparatorWithText from "../SeparatorWithText";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

interface IProps {
  setErrorMessage: (error: string) => void;
}

const SocialMediaLogin: React.FunctionComponent<IProps> = ({
  setErrorMessage,
}) => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const facebookProvider = new FacebookAuthProvider();

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const accessToken = await response.user.getIdToken();
      localStorage.setItem("token", accessToken);
      navigate("/exercises", { replace: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/account-exists-with-different-credential") {
          setErrorMessage(
            "Użyj tej samej metody logowania, co podczas rejestracji"
          );
        }
      }
    }
  };

  const facebookLogin = async () => {
    try {
      const response = await signInWithPopup(auth, facebookProvider);
      const accessToken = await response.user.getIdToken();
      localStorage.setItem("token", accessToken);
      navigate("/exercises", { replace: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/account-exists-with-different-credentials") {
          setErrorMessage(
            "Użyj tej samej metody logowania, co podczas rejestracji"
          );
        }
      }
    }
  };

  return (
    <div className="flex flex-col text-dim-lilac my-3">
      <SeparatorWithText
        textContent="lub zaloguj się przez"
        className="border-dim-lilac"
        backgroundColor="bg-gray-300"
      />
      <div className="flex flex-row justify-evenly pt-7">
        <button onClick={facebookLogin}>
          <AiFillFacebook color="#4267B2" size={50} />
        </button>
        <button onClick={googleLogin}>
          <FcGoogle size={50} />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
