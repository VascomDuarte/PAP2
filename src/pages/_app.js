import NavBar from "../Components/navbar";
import SimpleSlider from "../Components/car";
import "../styles/globals.css";
    // import connect from '../utils/mongo.config';                    
import Head from "next/head";
import { useEffect } from "react";
import logo from "public/assets/favicon.ico";


function MyApp({ Component, pageProps }) {

  return (
    <div className="bg-white-100 h-full w-full">
      <Head>
        <title>Talhos Grosso</title>
        <link rel="icon" href="/assets/favicon.ico" sizes="32x32"/>
        <meta name="description" content="Venha nos conhecer" />
        
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;