import NavBar from "../Components/navbar";
import SimpleSlider from "../Components/car";
import "../styles/globals.css";
    // import connect from '../utils/mongo.config';                    
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../Components/footer";

function MyApp({ Component, pageProps }) {

  return (
    <div className="bg-yellow-100 h-full w-full">
      <Head>
        <title>Jgs - Inicio</title>
        <link rel="icon" href="\favicon.png" />
        <meta name="description" content="Venha nos conhecer" />
        
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;