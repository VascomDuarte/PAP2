
import React, { useState, Fragment } from "react";
// import { Alert } from "@material-tailwind/react";
import { useRouter } from "next/router";
// import nookies from "nookies";
import Link from "next/link";



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");


  
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



  const validateForm = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
  
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      setError("Preencha todos os campos");
      setShow(true);
      return false;
    } else if (!isValidPassword) {
      setError("A password deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.");
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
      const res = await fetch("/api/auth/register", {
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
      } catch (error){
    
    setError("An error occurred while registering. Please try again later.");
  setShow(true);

  }
}

};
  

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className=" max-w-md min-h-full w-full space-y-2 py-5  ">
        {/* <div className="flex-row rounded-lg bg-red-500 text-gray-200 text-center ">
          <Fragment>
            <Alert
              className="w-full rounded-lg text-center  relative"
              variant="filled"
              color="red"
              show={show}
              animate={{
                mount: { y: 0 },
                unmount: { y: -50 },
              }}
            >
              {error}
            </Alert>
          </Fragment>
        </div> */}
        <div className="border-8 rounded-xl bg-yellow-400 border-yellow-400">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            Crie a sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Ou{" "}
            <Link
              href="/admin/auth/login"
              className="font-medium text-gray-100 hover:text-gray-400"
            >
              Entre na sua conta
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Nome" className="sr-only">
                Nome
              </label>
              <input
                onChange={handleNameChange}
                id="nome"
                name="nome"
                type="nome"
                autoComplete="nome"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-[#69AB3D]
                  focus:border-[#69AB3D] focus:z-10 sm:text-sm"
                placeholder="Nome"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de email
              </label>
              <input
                onChange={handleEmailChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 
                  focus:outline-none focus:ring-[#69AB3D]
                  focus:border-[#69AB3D] focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Palavra passe
              </label>
              <input
                onChange={handlePasswordChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-[#69AB3D]
                  focus:border-[#69AB3D] focus:z-10 sm:text-sm"
                placeholder="Palavra Passe"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirmar palavra passe
              </label>
              <input
                onChange={handleConfirmPasswordChange}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-[#69AB3D]
                  focus:border-[#69AB3D] focus:z-10 sm:text-sm"
                placeholder="Confirmar Palavra Passe"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-gray-700 bg-gray-300 hover:bg-gray-500 hover:text-gray-100
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#AED36C]"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </span>
              Registar
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;