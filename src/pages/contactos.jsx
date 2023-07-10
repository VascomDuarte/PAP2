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
              <h2 class="mb-6 text-3xl text-black font-bold">Contactos</h2>
              <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
                Para entrar em contato conosco, você pode utilizar as seguintes
                informações de contato:
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                244 765 299 <br /> R. António Maria dos Santos 4 <br /> 2440-105
                Batalha <br /> Portugal
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                244 471 103 <br /> +351 919 973 580 <br /> R. da Fonte 50 <br />{" "}
                2480-437 Juncal <br /> Portugal
              </p>
              <p class="mb-2 text-neutral-500 text-black dark:text-neutral-300">
                Email <br /> jgs.batalha@sapo.pt <br/>
              </p>
              <p class="mb-6 mt-5 text-neutral-500 text-black dark:text-neutral-300">
                Estamos disponíveis para atender suas perguntas, fornecer
                informações adicionais sobre os nossos produtos ou discutir
                qualquer assunto relacionado à JGS. Comércio Transformação de
                Carnes Lda. Não hesite em nos contatar por telefone, enviar um
                email ou visitar-nos pessoalmente em nosso estabelecimento.
                Teremos o maior prazer em ajudá-lo e fornecer um atendimento
                personalizado. Agradecemos o seu interesse em nossa empresa e
                aguardamos o seu contato.
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
}
