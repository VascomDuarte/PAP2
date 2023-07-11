import React, { useRef } from "react";
import Image from "next/image";
import logo from "../public/assets/logo1.png";
import Espetada_Peru from "../public/fotografias_site/20180308_130909.jpg";
import Espetada_Caseira from "../public/fotografias_site/FB_IMG_1622036120994.jpg";
import Mini_roloCarne from "../public/fotografias_site/FB_IMG_1622036102293.jpg";
import perna_frango_recheada from "../public/fotografias_site/perna_frango_recheada.jpg";

const Cards = () => {
  return (
    <div>
      <div className="pt-20 pb-5 flex items-center justify-center">
    <label className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"> Destaques da Semana</label>
    </div>
    <div className=" pb-10 flex items-center justify-center" > 

    <div className="mr-3 w-full max-w-sm bg-white border-4 border-gray-500  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      <a className="flex justify-center items-center pt-8" href="#">
        <Image
          className="p-8 rounded-t-lg rotate-90 scale-125"
          src={Espetada_Peru}
          alt="product image"
            width={250}
            height="h-full"
        />
      </a>
      <div className="px-5 pt-6 pb-6">
        <a href="#">
          <h5 className="mx-auto text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Espetada de Peru com Pimento verde
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            10.50€/kg
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adicionar ao carrinho
          </a>
        </div>
      </div>
    </div>
    <div className="mr-3 w-full h-3/5 max-w-sm bg-white border-4 border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="flex justify-center items-center" href="#">
        <Image
          className="p-8 rounded-t-lg"
          src={Espetada_Caseira}
          alt="product image"
            width={250}
            height={250}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Espetada de Frango com pimentos e salsicha criolo
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            12.50€/kg
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adicionar ao carrinho
          </a>
        </div>
      </div>
    </div>
    <div className="mr-3 w-full max-w-sm bg-white border-4 border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a className="flex justify-center items-center" href="#">
        <Image
          className="p-8 rounded-t-lg "
          src={perna_frango_recheada}
          alt="product image"
            width={250}
            height="h-3/6"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Perna de frango recheada
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            7.50€/kg
          </span>
          <a
            href=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adicionar ao carrinho
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cards;
