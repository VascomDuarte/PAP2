import React, { useState, useEffect } from "react";
import logo from "../public/fotografias_site/talho_logo.jpg";
import Image from "next/image";
import Link from "next/link";
import SimpleSlider from "./car";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#c83d3d");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [addressIndex, setAddressIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);
  const [localIndex, setLocalIndex] = useState(0);
  const [displayAddress, setDisplayAddress] = useState("");
  const [displayPhone, setDisplayPhone] = useState("");
  const [displayLocal, setDisplayLocal] = useState("");

  const addresses = ["R. António Maria dos Santos 4", "R. da Fonte 50"];
  const phones = ["244 471 103", "919 973 580"];
  const local = ["Batalha", "Juncal"];

  const toggleAddress = () => {
    setAddressIndex((addressIndex + 1) % addresses.length);
  };

  const togglePhone = () => {
    setPhoneIndex((phoneIndex + 1) % phones.length);
  };

  const toggleLocal = () => {
    setLocalIndex((localIndex + 1) % local.length);
  };

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setDisplayAddress(addresses[addressIndex]);
      setDisplayLocal(local[localIndex]);
      toggleLocal();
      toggleAddress();
    }, 5000);

    const intervalId2 = setInterval(() => {
      setDisplayPhone(phones[phoneIndex]);
      togglePhone();
    }, 5000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, [addressIndex, phoneIndex, localIndex]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className="fixed w-full z-50">
      <div
        style={{ backgroundColor: `${navBg}` }}
        className="flex justify-between  items-center w-full h-full 2xl:px-16"
      >
        <Link legacyBehavior href="/" className="">
          <a>
            <Image
              src={logo}
              alt="Logo"
              width="50"
              height="80"
              className="cursor-pointer rounded-2xl mt-2 mb-2"
            />
          </a>
        </Link>
        <ul className="flex justify-center  space-x-4 pl-32">
          
          <li className="text-xl">{displayLocal}</li>
          <li className="text-xl">{displayPhone}</li>
          <li className="text-xl">{displayAddress}</li>

        </ul>
        <ul className="flex items-center justify-between space-between">
          <li className="mr-4 text-lg">
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-300 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Entrar
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-300 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Registo
            </Link>
          </li>
        </ul>
      </div>

      <div
        style={{ backgroundColor: `${navBg}` }}
        className="flex justify-between items-center w-full h-full 2xl:px-16 pb-4"
      >
        <ul className="flex justify-center space-x-8 flex-grow">
          <li className="flex items-center">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Procurar
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Procurar"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-black bg-white rounded-lg border hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </li>
        </ul>
        <ul className="flex items-center justify-between space-between">
          <li>
            <ShoppingCartIcon className="h-8 w-8 text-gray-900 dark:text-white" />
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: navBg }} className="w-full h-full">
        <ul className="flex justify-center items-center space-x-4">
          <li className="text-xl">
            <Link legacyBehavior href="/">
              Início
            </Link>
          </li>
          <li className="text-xl">
            <Link href="/galeria">Produtos</Link>
          </li>
          <li className="text-xl">
            <Link href="/sobrenos">Sobre Nós</Link>
          </li>
          <li className="text-xl">
            <Link href="/contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
