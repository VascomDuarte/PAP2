import Example from "../admin/dashboard";
import React, { useState, useEffect, Fragment } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { Alert } from "@material-tailwind/react";
import { useRouter } from "next/router";
import nookies from "nookies";
import Link from "next/link";
import { GetServerSideProps, NextPageContext } from "next";


const useredit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const validateForm = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const isValidPassword = passwordRegex.test(password);

    if (oldPassword === "") {
      setError("Please enter your old password.");
      setShow(true);
      return false;
    } else if (password === "" && confirmPassword === "") {
      setError("Please enter your new password.");
      setShow(true);
      return false;
    } else if (!isValidPassword) {
      setError(
        "A password deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."
      );
      setShow(true);
      return false;
    } else if (password !== confirmPassword) {
      setError("As passwords não coincidem");
      setShow(true);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await fetch("/api/auth/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            "Referrer-Policy": "no-referrer",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "X-XSS-Protection": "1; mode=block",
            "Strict-Transport-Security":
              "max-age=31536000; includeSubDomains; preload",
          },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();

        if (data.ok) {
          // User successfully registered
          // Set cookies to remember the user for 14 days
          router.push("/login");
        } else if (res.status === 409) {
          // Email address is already registered
          setError(data.message);
          setShow(true);
        } else {
          // Show other error message
          setError(data.message);
          setShow(false);
        }
      } catch (error) {
        setError("An error occurred while updating. Please try again later.");
        setShow(true);
      }
    }
  };

//   function toggleSectionVisibility() {
//     const section = document.getElementById("mySection");
//     if (section.style.display === "none") {
//       section.style.display = "block";
//     } else {
//       section.style.display = "none";
//     }
//   }

  return (
    <div><Example />
    <div className="min-h-full min-w-full flex items-center justify-center py-16 px-2 sm:px-6 lg:px-4">
      <div className="flex felx-col pt-10 space">
        

        <section className="ml-36">
          <div className="flex flex-col items-center justify-center px-2 py-4  w-full md:h-100%  lg:py-0">
            <div className="w-full h-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0 bg-[#f52d2d] border-[#f52d2d] shadow-[#f52d2d] ">
              <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold   md:text-2xl text-white">
                  Detalhes de conta
                </h1>
                <form className="space-y-2 md:space-y-2 w-full" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Seu email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-800 text-black focus:ring-blue-500 focus:border-blue-500"
                      placeholder={""}
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nome"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Seu nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-800 text-black focus:ring-blue-500 focus:border-blue-500"
                      placeholder={""}
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder={("") || "••••••••"}
                      className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-800 text-black focus:ring-blue-500 focus:border-blue-500"
                      disabled
                    />
                  </div>
                  <a
                    id="myButton"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer text-white bg-gray-400 hover:bg-gray-700"
                    onClick={() => ""}
                  >
                    Atualizar
                  </a>
                  <a
                    id="myButton"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer text-white bg-gray-400 hover:bg-red-700"
                    onClick={() => ""}
                  >
                    Apagar Conta
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="mySection">
          <div className="flex flex-col items-center justify-center px-2 py-4  w-full md:h-100%  lg:py-0">
            <div className="w-full h-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0 bg-[#f52d2d] border-[#f52d2d] shadow-[#f52d2d] ">
              <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold   md:text-2xl text-white">
                  Atualize suas informações
                </h1>
                  <div className="flex-row md:text-2xl max-w-xs mx-auto rounded-lg bg-yellow-400 text-gray-200 text-center">
                    <Alert
                      className="w-full rounded-lg text-center "
                      variant="filled"
                      color="yellow"
                      
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: -50 },
                      }}
                    >
                      {error}
                    </Alert>
                </div>
                <form className="space-y-2 md:space-y-2 w-full" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Novo email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleEmailChange}
                      className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nome"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Novo nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      onChange={handleNameChange}
                      className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Mascavoni"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Password Atual"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password Atual
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="oldpassword"
                      onChange={handleOldPasswordChange}
                      placeholder={("") || "••••••••"}
                      className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Nova password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handlePasswordChange}
                      placeholder="••••••••"
                      className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium  text-white"
                    >
                      Confirme sua password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      onChange={handleConfirmPasswordChange}
                      placeholder="••••••••"
                      className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="ml-3 text-sm"></div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="cursor-pointer w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 hover:bg-green-400"
                  >
                    Confirmar
                  </button>

                  <a
                    href="/"
                    className="cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-700"
                  >
                    Voltar
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default useredit;