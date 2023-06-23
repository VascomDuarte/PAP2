import NavBar from "../Components/navbar";
import SimpleSlider from "../Components/car";
import "../styles/globals.css";
    // import connect from '../utils/mongo.config';                    
import Head from "next/head";
import { useEffect } from "react";
import logo from "public/assets/logo1.png";


function MyApp({ Component, pageProps }) {

  return (
    <div className="bg-white-100 h-full w-full">
      <Head>
        <title>Jgs - Inicio</title>
        <link rel="icon" href="logo" />
        <meta name="description" content="Venha nos conhecer" />
        
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;