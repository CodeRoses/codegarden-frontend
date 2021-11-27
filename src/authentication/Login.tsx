import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import SeparatorWithText from "../SeparatorWithText";

const Login = () => {
  return (
    <div className="bg-gray-300 flex flex-col items-center">
      <div className="p-3 text-dim-lilac">
        <p className="text-4xl">Zaloguj się</p>
        <div className="flex justify-end p-2">
          <p>nie masz konta?</p>
          <p className="text-pink-400 ml-1">Zarejestruj się</p>
        </div>

        <div className="flex flex-col min-w-6xl items-start">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="w-3/5 m-3 rounded-lg p-2"
            type="text"
            //   onChange={(e) => setSearchPhrase(e.currentTarget.value.toLowerCase())}
          />
          <label htmlFor="password">Hasło</label>
          <input
            name="password"
            className="w-3/5 m-3 rounded-lg p-2"
            type="text"
            //   onChange={(e) => setSearchPhrase(e.currentTarget.value.toLowerCase())}
            placeholder="Hasło"
          />
        </div>

        <div className="bg-pink-400 rounded-lg p-3 text-dim-lilac w-1/2 flex m-auto justify-center">
          <button type="submit" className="text-xl font-bold">
            Zaloguj
          </button>
        </div>

        <div className="flex flex-col text-dim-lilac my-5">
          <SeparatorWithText
            textContent="zaloguj się przez"
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

export default Login;
