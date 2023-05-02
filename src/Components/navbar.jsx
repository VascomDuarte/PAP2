import React, { useState, useEffect } from "react";
import logo from "../public/assets/logo1.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#c83d3d");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [addressIndex, setAddressIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);
  const [displayAddress, setDisplayAddress] = useState("");
  const [displayPhone, setDisplayPhone] = useState("");

  const addresses = ["123 Main St", "456 Oak St", "789 Elm St"];
  const phones = ["555-1234", "555-5678", "555-9012"];

  const toggleAddress = () => {
    setAddressIndex((addressIndex + 1) % addresses.length);
  };

  const togglePhone = () => {
    setPhoneIndex((phoneIndex + 1) % phones.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayAddress(addresses[addressIndex]);
      setDisplayPhone(phones[phoneIndex]);
      toggleAddress();
      togglePhone();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [addressIndex, phoneIndex]);

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
    <div>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className="flex justify-between items-center w-full h-full 2xl:px-16"
      >
        <Link legacyBehavior href="/" className="">
          <a>
            <Image
              src={logo}
              alt="Logo"
              width="90"
              height="90"
              className="cursor-pointer rounded-full mt-2 mb-2"
            />
          </a>
        </Link>
        <ul className="flex justify-center items-center space-x-4">
          <li className="text-2xl">
            {displayAddress}
          </li>
          <li className="text-2xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-2xl">
              {displayPhone}
          </li>
        </ul>
        <ul className="flex items-center justify-between space-between">
          <li className="mr-4 text-xl">
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-500 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href="/signup"
              className="px-4 py-2 bg-yellow-500 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: navBg }} className="w-full h-full">
        <ul className="flex justify-center items-center space-x-4">
          <li className="text-2xl">
            <Link legacyBehavior href="/">
              Home
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-2xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
