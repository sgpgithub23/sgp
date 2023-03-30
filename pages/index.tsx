import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import { useSpringCarousel } from "react-spring-carousel";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillArrowDownCircleFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Button from "@/components/Button";
import Image from "next/image";
import { Periodicos } from "@/utils/detalhes-periodicos";
import BookOpen from "@/public/icons/book-open";
import { ObrasExclusivas } from "@/utils/obras";
import { RedesSociaisSGP } from "@/utils/redes-socias";
import Link from "next/link";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import { ClientesRequisicao } from "@/typings/Requisicoes/Clientes";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import { Depoimentos } from "@/utils/depoimentos";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=logosclientesempresas`
  );
  const clientes: ClientesRequisicao[] = await res.json();

  return {
    props: {
      clientes,
    },
    revalidate: 600,
  };
}

export default function Home({
  clientes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { push } = useRouter();

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      items: [
        {
          id: "item-1",
          renderItem: (
            <div className={styles.imgBannerPublicacoes}>
              <div className={styles.boldHigher}>
                <span>
                  Publicações de qualidade e que fazem a
                  <span className={styles.italicTiny}> diferença! </span>
                </span>
                <Button
                  onClick={() => push("#quem-somos")}
                  title="Saber Mais Agora!"
                  color="blue"
                />
              </div>
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div className={styles.imgCaraGravata}>
              <div>
                <p className={styles.boldHigher}>Dream Team</p>
                de <span className={styles.italicTiny}>Professores</span>,
                <br /> Consultores e Técnicos
                <Button
                  onClick={() => push("/nossos-professores")}
                  title="Saber Mais Agora!"
                  color="blue"
                />
              </div>
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div className={styles.imgDuasConversando}>
              <span>
                <b>Pós Graduação </b>
                com Professores de alto
                <em className={styles.italicTiny}> padrão </em>
                <Button
                  onClick={() => push("/nossos-professores")}
                  title="Consultar disponibilidade"
                  color="orange"
                />
              </span>
            </div>
          ),
        },
        {
          id: "item-4",
          renderItem: (
            <div className={styles.imgHomemTelefone}>
              <div>
                <h3>Eventos In Company</h3>
                <span>Consulte nossa agenda de cursos e Treinamentos</span>
                <Button
                  onClick={() => push("/cursos-treinamentos")}
                  title="Consultar disponibilidade"
                  color="blue"
                />
              </div>
            </div>
          ),
        },
        {
          id: "item-5",
          renderItem: (
            <div className={styles.imgMao}>
              <div>
                <Button
                  onClick={() => push("/solucoes-inovadoras")}
                  title="Soluções Inovadoras em:"
                  color="blue"
                />

                <p>
                  Periódicos informativos Orientação Jurídica Cursos e
                  Treinamentos
                  <em> Eventos In Company </em>
                  Assessorias para empresas privadas
                </p>
              </div>
            </div>
          ),
        },
        {
          id: "item-6",
          renderItem: <div className={styles.imgMarcia}></div>,
        },
        {
          id: "item-7",
          renderItem: (
            <div className={styles.imgModelTresPessoas}>
              <div>
                <p>
                  <b>Capacitação</b> técnica que faz a diferença
                </p>
                <Button
                  onClick={() => push("/solucoes-inovadoras")}
                  title="SGP é a solução!"
                  color="blue"
                />
              </div>
            </div>
          ),
        },
        {
          id: "item-8",
          renderItem: (
            <div className={styles.imgModel}>
              <div>
                <p>
                  <b>Informação de qualidade</b>, sempre atual seguindo as{" "}
                  <em> boas práticas </em>
                  do mercado.
                </p>
                <Button
                  onClick={() => push("#quem-somos")}
                  title="SGP é a solução!"
                  color="blue"
                />
              </div>
            </div>
          ),
        },
        {
          id: "item-9",
          renderItem: (
            <div className={styles.imgPublico}>
              <div>
                <p>
                  <b>Cansado de</b> "cursinho" e "palestrinha"???
                </p>
                <Button
                  onClick={() => push("/cursos-treinamentos")}
                  title="SGP é a solução!"
                  color="orange"
                />
              </div>
            </div>
          ),
        },
      ],
    });

  const carouselParceiros = useSpringCarousel({
    itemsPerSlide: 2,
    withLoop: true,
    initialActiveItem: 1,
    // @ts-ignore
    items: clientes.map((cliente, index) => {
      return {
        id: cliente.sequencia,
        renderItem: (
          <div key={index} className={styles.englobaTudo}>
            <div className={styles.carouselParceirosItem}>
              <Image
                // src={`https://www.sgpsolucoes.com.br/imagens/fotosprofessores/${modalContent?.nomearquivofotoprofessor}`
                src={`https://www.sgpsolucoes.com.br/crm/imagens_sistema/logosclientesempresas/${cliente.nomearquivologo}`}
                alt={String(cliente.sequencia)}
                width={811}
                height={225}
                className={"imgOnHover"}
              />
            </div>
          </div>
        ),
      };
    }),
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     slideToNextItem();
  //     carouselParceiros.slideToNextItem();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // const carouselDepoimentos = useSpringCarousel({
  //   itemsPerSlide: 1,
  //   withLoop: true,
  //   initialActiveItem: 1,
  //   // @ts-ignore
  //   items: Depoimentos.map((cliente, index) => {
  //     return ({
  //       id: index,
  //       renderItem: (
  //         <div key={index} className={styles.depoimentosClientes}>
  //           <p>{cliente.descricao}</p>
  //           <p>{cliente.nomecargo}</p>
  //         </div>
  //       ),
  //     })
  //   })
  // });

  function getIconByName(rede: string) {
    if (rede === "Facebook") {
      return <BsFacebook />;
    }

    if (rede === "Youtube") {
      return <BsYoutube />;
    }

    if (rede === "LinkedIn") {
      return <BsLinkedin />;
    }

    if (rede === "Twitter") {
      return <BsTwitter />;
    }

    if (rede === "Instagram") {
      return <BsInstagram />;
    }
  }

  return (
    <div className={styles.fullPage}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.carouselSpace}>
          <button className={styles.slideToPrevItem} onClick={slideToPrevItem}>
            <BsArrowLeftCircle />
          </button>
          {carouselFragment}
          <button className={styles.slideToNextItem} onClick={slideToNextItem}>
            <BsArrowRightCircle />
          </button>
          <span>asdlkjaslkdjk</span>
        </div>
      </main>

      <section className={styles.quemsomos} id="quem-somos">
        <div className={styles.textoEImagem}>
          <div className={styles.descricao}>
            <h1>Quem somos, um pouco da história da SGP. </h1>
            <hr />
            <div className={styles.historiaSgp}>
              <p>
                Experientes profissionais dos segmentos de Cursos e Treinamentos
                de capacitação profissional, Editoração, Assessoramento
                Tecnico-Jurídico e Vendas para a Poder Público uniram esforços
                em uma nova e arrojada empreitada, com o intuito de continuar a
                atualizar, informar, capacitar e trazer as mais variadas
                Soluções inovadoras e de alta qualidade aos profissionais que
                atuam na área do Direito Público.
              </p>
              <p className={styles.descricaoPt2}>
                {" "}
                Assim nasceu a SGP – Soluções em Gestão Pública, uma empresa que
                veio inovar no mercado de eventos técnicos e jurídicos,
                capacitação e aperfeiçoamento profissional, editoração de
                periódicos mensais nas áreas das Licitações e Contratos, Direito
                Administrativo, Direito Municipal, Direito Tributário, Direito
                Constitucional, Direito Eleitoral, Direito Urbanístico e Direito
                Público como um todo, bem como livros de alta relevância para a
                Administração Pública.
              </p>
              <p>
                E não parou por aí... A SGP avançou e expandiu suas Soluções,
                passando a atuar em diversos segmentos de Assessoramentos
                Técnicos e Jurídicos, por escrito, de forma presencial ou
                on-line, sob os mais variados temas.{" "}
              </p>
              <p>
                Tanto nos Cursos e Treinamentos quanto nas mais diversas formas
                de Assessoramento, a SGP conta com uma equipe altamente
                qualificada em cada segmento, detentora de um know-how singular,
                obtido ao longo de mais de 25 anos de experiência no segmento da
                boa Gestão Pública.{" "}
              </p>
              <p>
                Sempre pensando em novas Soluções, a SGP também oferece a mais
                completa Pós-Graduação: MBA Lato Sensu On-Line em Licitações e
                Contratações da Administração Pública, com um quadro de
                professores de fazer inveja, composto de 70% de Pós-Doutores,
                Doutores e Mestres na sua área de atuação.{" "}
              </p>
              <p>
                Mais recentemente, a fim de aproveitar ainda mais sua equipe
                altamente qualificada, a SGP apresentou ao mercado sua mais nova
                Solução: a elaboração de minutas de regulamentos da nova Lei de
                Licitações e Contratos (Lei nº 14.133/2021), bem como a
                elaboração de minutas de Regimentos Internos, Leis Orgânicas
                Municipais, Estatutos de Servidores Públicos Municipais e
                Reestruturação de Cargos e Salários dos Servidores Municipais.
              </p>
              <p>
                Esta é a SGP, uma empresa que dia após dia se reinventa,
                buscando sempre o seu aperfeiçoamento, a fim de cada vez mais
                criar Soluções inovadoras e eficazes para uma Gestão Pública de
                excelência.{" "}
              </p>
            </div>
          </div>
          <div className={styles.foto}>
            <Image
              src={"/images/homepage/cidadesp.webp"}
              alt="Foto do centro de São Paulo"
              width={416}
              height={700}
              className={"imgOnHover"}
            />
            <Image
              src={"/images/homepage/predio.webp"}
              alt="Foto do centro de São Paulo"
              width={416}
              height={468}
              className={"imgOnHover"}
            />
          </div>
        </div>
        <div className={styles.icon}>
          <BsFillArrowDownCircleFill
            size="25px"
            onClick={() => push("#clientes")}
          />
        </div>
      </section>

      <section className={styles.clientesContribuintes} id="clientes">
        <h1 className={styles.titleDarkBlue}>
          Clientes que fazem parte deste sucesso
        </h1>
        <div className={styles.spaceTitleCarousel}>
          <div className={styles.explicacao}>
            <p>
              Contar com clientes em potencial é o que nos motiva como empresa a
              cada ano.
            </p>
            <p>
              Vivenciando dificuldades e participando de experiências
              profissionais de nossos clientes, nos trouxe uma bagagem onde
              sempre podemos direciona-los por um caminho mais tranquilo,
              estratégico e muito mais profissional.
            </p>
            <p>
              Esta é a razão da SGP Soluções em ser sempre lembrada quando
              existir necessidade de se capacitar em cursos e treinamentos,
              adquirir um material com conteúdo didático ou orientações no
              segmento de Gestão Pública.
            </p>
          </div>
          <div className={styles.carouselAll}>
            <div className={styles.carousel}>
              {carouselParceiros.carouselFragment}
            </div>
            <div className={styles.controles}>
              <MdOutlineKeyboardArrowLeft
                onClick={carouselParceiros.slideToPrevItem}
                className={styles.arrowLeft}
              />
              <MdOutlineKeyboardArrowRight
                onClick={carouselParceiros.slideToNextItem}
                className={styles.arrowRight}
              />
              <span>Clique nos botões para interagir</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comentarios}>
        <div className={styles.comentariosContent}>
          <h1 className={styles.titleDarkBlue}>
            Clientes e Parceiros comentam sobre a SGP Soluções...
          </h1>
          <div className={styles.carouselDepoimentosAll}>
            <div className={styles.carosel}>
              {/* {carouselDepoimentos.carouselFragment} */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.periodicosExclusivos} id="periodicos-mensais">
        <div className={styles.periodicos}>
          <div className={styles.introducao}>
            <h1 className={styles.titleDarkBlue}>
              Conheça nossos periódicos exclusivos
            </h1>
            <p>
              A SGP - Soluções em Gestão Pública atua no mercado editorial,
              oferecendo publicações especializadas mensais de qualidade e
              extremamente práticas, na área do Direito Público.
            </p>
          </div>
          <div className={styles.fotosPeriodicos}>
            <Image
              src={"/images/homepage/periodicos/azul.png"}
              alt="Foto do centro de São Paulo"
              width={200.44}
              height={300.32}
              className={"imgOnHover"}
            />
            <Image
              src={"/images/homepage/periodicos/laranja.png"}
              alt="Foto do centro de São Paulo"
              width={200.44}
              height={300.32}
              className={"imgOnHover"}
            />
          </div>
        </div>

        <div className={styles.topicosPeriodicos}>
          {Periodicos.map(({ title, descricao }) => (
            <div key={title} className={styles.item}>
              <div className={styles.titleIcon}>
                <Image
                  width={10}
                  height={10}
                  src={"/icons/ticked.svg"}
                  alt="Ícone indicando que um item na lista está preenchido"
                  className={"imgOnHover"}
                />
                <h1>{title}</h1>
              </div>
              <p>{descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.degustacaoAll}>
        <div className={styles.degustacao}>
          <div className={styles.leftSide}>
            <h1>Desfrute de uma degustação gratuita de nossos periódicos.</h1>
            <div className={styles.livroExplicacao}>
              <BookOpen strokeColor="#ffffff" />
              <p>Nossos periódicos em formato reduzido para você degustar.</p>
            </div>
            <Button
              title="Degustar agora!"
              onClick={() => push("/nossos-periodicos")}
              color="blue"
            />
          </div>
          <div className={styles.rightSide}>
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-1.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-2.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-3.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-4.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        </div>
      </section>

      <section className={styles.assinantes}>
        <div className={styles.assinantesAll}>
          <div className={styles.leftSide}>
            <h1>Os assinantes do SLC e do SAM</h1>
            <p>
              Poderão contar com a Orientação SGP, que atua na área do Direito
              Administrativo e Municipal, sendo composta por advogados altamente
              especializados e capacitados.
            </p>
            <p>
              Também podemos disponibilizar aos assinantes a nossa Assessoria
              Jurídica In Loco, com visitações no órgão ou entidade, a fim de
              realizar assessoramento pessoal e diferenciado na área de
              licitações e contratos.
            </p>
          </div>
          <div className={styles.solicitacoes}>
            <div className={styles.centerSide}>
              <BookOpen strokeColor="#ffffff" />
              <p>
                <b>Desejo solicitar </b>
                uma assinatura anual do
                <b> SLC OU SAM</b>
              </p>
              <Button
                color="blue"
                title="Assinatura anual"
                onClick={() => push("/contato")}
              />
            </div>
            <div className={styles.rightSide}>
              <BookOpen strokeColor="#032752" />
              <p>Necessito de orientações jurídicas e/ou assessoria local</p>
              <Button
                color="darkBlue"
                title="Orientação Jurídica"
                onClick={() => push("/contato")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.obrasExclusivas}>
        <div className={styles.obrasExclusivasAll}>
          <BsInfoCircleFill />
          <hr />
          <h1>Confira nossos livros e obras exclusivas</h1>
          <div>
            {ObrasExclusivas.map(({ desc, img, title, alt, cor }) => (
              <div key={alt} className={styles.obra}>
                <img src={img} alt={alt} />
                <h4>{title}</h4>
                <p>{desc}</p>
                <Button
                  color="darkBlue"
                  title="Saiba mais"
                  onClick={() => push(`/periodicos/${cor}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.redesSociais}>
        <div className={styles.redesSociaisAll}>
          <div className={styles.linksSeguir}>
            <div className={styles.introducao}>
              <h2>Siga-nos nas Redes Sociais</h2>
              <span>
                Acompanhe a divulgação de nossos cursos e treinamentos e fique
                por dentro das principais notícias relacionadas ao direito
                administrativo.
              </span>
            </div>
            <div className={styles.mappedSociais}>
              {RedesSociaisSGP.map(({ link, name }) => (
                <Link
                  href={link}
                  target="_blank"
                  key={link}
                  className={styles.rede}
                >
                  {getIconByName(name)}
                  <div>
                    <p>Nosso perfil: </p>
                    <p className={styles.nome}>{name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src={"/images/homepage/homem-computador.webp"}
              alt="Homem sentado sorrindo mexendo no computador"
              width={287}
              height={284}
              className={"imgOnHover"}
            />
          </div>
        </div>
      </section>

      <FooterCompleto />
    </div>
  );
}
