import NavBar from "../Components/navbar";
import SimpleSlider from "../Components/car";
import "../styles/globals.css";
    // import connect from '../utils/mongo.config';                    
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <div className="bg-yellow-100 h-full w-full">
      <Head>
        <title>Jgs - Inicio</title>
        
        <meta name="description" content="Venha nos conhecer" />
        <link rel="icon" href="img_tt" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;