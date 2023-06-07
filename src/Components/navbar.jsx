import React, { useState, useEffect } from "react";
import logo from "../public/assets/logo1.png";
import Image from "next/image";
import Link from "next/link";
import SimpleSlider from "./car";

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
    <div className="fixed w-full">
      <div
        style={{ backgroundColor: `${navBg}` }}
        className="flex justify-between  items-center w-full h-full 2xl:px-16"
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
        <ul className="flex justify-center  space-x-8 pl-14">
          <li className="text-xl">
            {displayAddress}
          </li>
          <li className="text-xl">
            {displayLocal}
          </li>
          <li className="text-xl">
            {displayPhone}
          </li>
        </ul>
        <ul className="flex items-center justify-between space-between">
          <li className="mr-4 text-lg">
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-300 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-300 rounded-md text-black hover:text-white hover:bg-yellow-600 transition duration-300"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: navBg }} className="w-full h-full">
        <ul className="flex justify-center items-center space-x-4">
          <li className="text-xl">
            <Link legacyBehavior href="/">
              Home
            </Link>
          </li>
          <li className="text-xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default NavBar;
