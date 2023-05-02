import NavBar from "../Components/navbar";
import "../styles/globals.css";
    // import connect from '../utils/mongo.config';                    
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Jgs - Inicio</title>
        
        <meta name="description" content="Venha nos conhecer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;