import React from "react";
import Image from "next/image";
import logoTalho from "../public/fotografias_site/talho_logo.jpg";
import logoJGS from "../public/fotografias_site/jgs_logo.jpg";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

export default function contactos() {

    return (
        <div>
            <NavBar />
<div class="container  mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32">
    <div class="flex flex-wrap">
      <div class="mt-52 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 class="mb-6 text-3xl text-black font-bold">Contact us</h2>
        <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, modi accusantium ipsum corporis quia asperiores
          dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
          autem omnis fugiat perspiciatis? Ad, veritatis.
        </p>
        <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
          New York, 94126, United States
        </p>
        <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
          + 01 234 567 89
        </p>
        <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
          info@gmail.com
        </p>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
{/* <!-- Container for demo purpose        https://tailwind-elements.com/snippets/tailwind/tailwindelements/5203857#html-tab-view   -->*/}
            <Footer />
</div> 
    );
    };