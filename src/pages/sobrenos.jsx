import React from "react";
import Image from "next/image";
import logoTalho from "../public/fotografias_site/talho_logo.jpg";
import logoJGS from "../public/fotografias_site/jgs_logo.jpg";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

export default function quemsomos() {
  return (
    <div>
      <NavBar />

      <div className="pt-52 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 pb-[90px]">
          <p className="uppercase text-xl tracking-widest text-[#FFDB14]">
            Quem somos
          </p>
          <h3 className="px-4 py-4 text-black"> {""} A empresa</h3>
          <p className="px-4 py-4 text-black">
            A JGS. Comércio Transformação de Carnes Lda existe desde 2002, tendo
            surgido porque o nível de negócios da anterior firma em nome de José
            Grosso da Silva ter atingido números elevados, foi aconselhado que
            fosse formada uma nova empresa, a JGS.
            <br />
            <br />A anterior firma em nome individual iniciou a sua actividade
            em 1981, sempre a comercializar carne num pequeno estabelecimento na
            Batalha, intitulado Talhos Grosso, mas com o intuito de expandir a
            sua actividade a outros locais, abriu outro estabelecimento no
            Mercado Municipal de Porto de Mós em 1984 ( que mais tarde
            encerrou), e outro situado na localidade do Juncal.
          </p>
          <p className="px-4 py-4 text-black">
            Como complemento da comercialização de carne também se fabrica
            enchidos ( chouriço de carne, farinheira, negrito, morcela de arroz)
            , tendo começado por fabricar apenas para a venda nos
            estabelecimentos, teve necessidade de aumentar as instalações,
            porque a quantidade de produção estava a aumentar, como também as
            exigências sanitárias assim imponham. Aumentaram-se as instalações
            em 1996 com sala de desmancha para apoio aos talhos e também a parte
            de fabrico dos enchidos. Todos os enchidos fabricados nas nossas
            instalações, respeitam os métodos tradicionais de fabrico utilizados
            na nossa região, sendo a morcela a mais procurada e a mais conhecida
            em todo o país como a morcela de Leiria.
            <br />
            <br />
            Na nossa carteira de clientes contam os Modelos Continente da zona
            Centro e outros clientes não tão conhecidos mas não mais importantes
            que todos os outros atrás mencionados.
            <br />
          </p>
          <p
            href="/contactos"
            className="px-4 py-4 text-black underline cursor-pointer"
          >
            Descubra onde nos pode encontrar.
          </p>

          <h3 className="px-4 py-4 text-black"> {""} A nossa missão</h3>
          <p className="px-4 py-4 text-black">
            A nossa missão na JGS. Comércio Transformação de Carnes Lda é
            fornecer produtos de carne e enchidos da mais alta qualidade aos
            nossos clientes. Desde a nossa fundação em 2002, nos empenhamos em
            garantir que os nossos produtos atendam aos mais elevados padrões de
            qualidade. Utilizamos métodos tradicionais de fabrico, especialmente
            na produção dos nossos famosos enchidos, como a morcela de Leiria.
            Valorizamos a tradição e o sabor autêntico, oferecendo aos nossos
            clientes uma variedade de produtos que refletem a diversidade da
            nossa região. Além disso, estamos empenhados em atender às
            necessidades dos nossos clientes, adaptando a nossa oferta para
            fornecer uma ampla gama de opções de carne e enchidos que atendam
            aos seus gostos e preferências.
          </p>
          <h3 className="px-4 py-4 text-black"> {""} Os nossos valores</h3>
          <p className="px-4 py-4 text-black">
            Os nossos valores fundamentais incluem a busca pela excelência e a
            dedicação à satisfação dos nossos clientes. Colocamos a qualidade em
            primeiro lugar em todas as etapas do nosso processo de produção,
            desde a seleção dos melhores ingredientes até a preparação cuidadosa
            dos nossos produtos. Também valorizamos a tradição e a
            autenticidade, preservando os métodos de fabrico tradicionais que
            resultam em sabores distintos e deliciosos. Além disso, acreditamos
            na importância da inovação e do crescimento contínuo. Estamos
            constantemente buscando formas de melhorar os nossos produtos e
            expandir a nossa oferta, para oferecer aos nossos clientes uma
            variedade ainda maior de opções. Estes valores orientam as nossas
            ações diárias e nos permitem ser uma referência na indústria de
            carnes e enchidos, proporcionando uma experiência de qualidade aos
            nossos clientes.
          </p>
        </div>
        <div className="w-9/12 h-auto relative shadow-[#1C2120] rounded-lg flex items-center justify-center hover:scale-105 ease-in duration-300">
          <span className="box-border border-gray-700 rounded-lg inline-block overflow-hidden w-auto h-auto border-[3px] m-0 p-0 relative max-w-full">
            <span className="box-border w-auto h-auto border-0 m-0 p-0 max-w-full">
              <Image
                className="border-0 m-0 p-0 relative z-0"
                alt="Logo JGS"
                src={logoJGS}
                width="300"
                height="300"
              />
            </span>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
