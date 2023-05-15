import react from "react";

import { useState, useEffect, Fragment } from "react";
import nookies from "nookies";
// import { LockClosedIcon } from "@heroicons/react/solid";
// import { LockOpenIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Alert } from "@material-tailwind/react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const rotas = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 9000);
    return () => clearTimeout(timeoutId);
  }, []);

  function verificaCampos() {
    if (email === "" || password === "") {
      setError("Preencha todos os campos!");
      setShow(true);
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verificaCampos()) {
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Referrer-Policy": "no-referrer",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "SAMEORIGIN",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        // Handle success case
        rotas.push("/admin/dashboard");

        return;
      } else if (data.status !== 200) {
        setError(data.message);
        setShow(true);
      }
    } catch (error) {
      setError("Ocorreu um erro ao efetuar o login.");
      setShow(true);
      console.error(error);
    }
  };

  const HandleRememberMe = (e: any) => {
    if (e.target.checked) {
      //set nookies to remember user login expire in 14 days
      nookies.set(null, "rememberMe", "true", {
        path: "/",
        maxAge: 60 * 60 * 24 * 14,
        sameSite: true,
      });
    } else {
      nookies.destroy(null, "rememberMe");
    }
  };

  const handleEmailChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const [isHovering, setIsHovering] = useState(false);

return (
  <div className="min-h-screen min-w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
    <div className=" max-w-md min-h-full w-full space-y-2 py-5  ">
      <div className="flex-row rounded-lg bg-red-500 text-gray-200 text-center ">
        {/* <Fragment>
          <Alert
            className="w-full rounded-lg text-center  relative"
            variant="filled"
            color="red"
            // show={show}
            animate={{
              mount: { y: 0 },
              unmount: { y: -50 },
            }}
          >
            {error}
          </Alert>
        </Fragment> */}
      </div>
      <div className="border-8 rounded-xl bg-yellow-400 border-yellow-400">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Entre na sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-200">
          Ou{" "}
          <Link
            legacyBehavior
            className="font-medium text-gray-100 hover:text-black"
            href="../auth/register"
          >
            crie sua conta
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Endereço de email
            </label>
            <input
              onChange={handleEmailChanged}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-t-md
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
              onChange={handlePasswordChanged}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-b-md
            focus:outline-none focus:ring-[#69AB3D]
            focus:border-[#69AB3D] focus:z-10 sm:text-sm"
              placeholder="palavra passe"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              onClick={HandleRememberMe}
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-white hover:text-gray-300 focus:ring-[#69AB3D]
            border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-100"
            >
              Lembrar de mim
            </label>
          </div>

          <div className="text-sm">
            <a
              href="/forgotpassword"
              className="font-medium text-gray-100 hover:text-gray-300"
            >
              Esqueceu sua palavra passe?
            </a>
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
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* {isHovering ? (
                <LockOpenIcon
                  className="h-5 w-5 text-gray-700  group-hover:text-gray-200"
                  aria-hidden="true"
                />
              ) : (
                <LockClosedIcon
                  className="h-5 w-5 text-gray-700  group-hover:text-gray-200"
                  aria-hidden="true"
                />
              )} */}
            </span>
            Entrar
          </button>
        </div>
      </form>
    </div>
    </div>
  </div>
);
};
export default Login;
