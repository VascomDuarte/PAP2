import React, { useState, useEffect } from "react";


const Footer = () => {
return(
<footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Talhos Grosso™</a>.  All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Sobre Nós</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Políticas de Privacidade</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensas</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contactos</a>
        </li>
    </ul>
</footer>

);
};

export default Footer;