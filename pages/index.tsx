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
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { ProfessorReq } from "@/typings/Requisicoes/Professores";
import { cloneDeep } from "lodash";

export default function Home({
  imgsJson,
  clientes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { push } = useRouter();
  const [mainCarouselImg, setMainCarouselImg] =
    useState<RegularImageType[]>(imgsJson);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      // @ts-ignore
      items: mainCarouselImg.map((x: RegularImageType, index: number) => ({
        id: index,
        renderItem: (
          <div
            className={styles[x.nomeclass]}
            onClick={() => linkToUrlBannerCarousel(x.caminhohref)}
            style={{
              backgroundImage: `url(${x.caminhoimagem})`,
            }}
          ></div>
        ),
      })),
      breakpoints: {},
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

  const carouselDegustacao = useSpringCarousel({
    itemsPerSlide: 2,
    withLoop: true,
    items: [
      {
        id: "1",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-1.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
      {
        id: "2",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-2.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
      {
        id: "3",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-3.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
      {
        id: "4",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={150}
              height={150}
              src={"/images/homepage/degustacao/degustacao-4.png"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
    ],
  });

  const carouselPeriodicosExclusivos = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    // initialActiveItem: 1,
    items: [
      {
        id: "1",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={2084}
              height={2323}
              src={"/images/homepage/periodicos/SAM.webp"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
      {
        id: "2",
        renderItem: (
          <div className={styles.carouselPeriodicoIndividual}>
            <Image
              width={2084}
              height={2323}
              src={"/images/homepage/periodicos/SLC.webp"}
              alt="Ícone indicando que um item na lista está preenchido"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
      carouselParceiros.slideToNextItem();
    }, 8000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1920) {
        const auxArr: RegularImageType[] = cloneDeep(imgsJson);
        const auxSize = auxArr.filter((x) => x.formato === "1920");
        setMainCarouselImg(auxSize);
        return;
      }

      if (window.innerWidth <= 1920 && window.innerWidth > 1100) {
        const auxArr: RegularImageType[] = cloneDeep(imgsJson);
        const auxSize = auxArr.filter((x) => x.formato === "1600");
        setMainCarouselImg(auxSize);
        return;
      }

      if (window.innerWidth <= 1100 && window.innerWidth > 800) {
        const auxArr: RegularImageType[] = cloneDeep(imgsJson);
        const auxSize = auxArr.filter((x) => x.formato === "1100");
        setMainCarouselImg(auxSize);
        return;
      }

      if (window.innerWidth <= 800 && window.innerWidth > 469) {
        const auxArr: RegularImageType[] = cloneDeep(imgsJson);
        const auxSize = auxArr.filter((x) => x.formato === "800");
        setMainCarouselImg(auxSize);
        return;
      }

      if (window.innerWidth <= 469) {
        const auxArr: RegularImageType[] = cloneDeep(imgsJson);
        const auxSize = auxArr.filter((x) => x.formato === "410");
        setMainCarouselImg(auxSize);
        return;
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  function linkToUrlBannerCarousel(url: string) {
    push(url);
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
        </div>
      </main>

      <section className={styles.quemSomosAll}>
        <div className={styles.quemsomos}>
          <div className={styles.textoEImagem}>
            <div className={styles.descricao}>
              <h1>Quem somos, um pouco da história da SGP. </h1>
              <hr />
              <div className={styles.historiaSgp}>
                <p>
                  Experientes profissionais dos segmentos de Cursos e
                  Treinamentos de capacitação profissional, Editoração,
                  Assessoramento Tecnico-Jurídico e Vendas para a Poder Público
                  uniram esforços em uma nova e arrojada empreitada, com o
                  intuito de continuar a atualizar, informar, capacitar e trazer
                  as mais variadas Soluções inovadoras e de alta qualidade aos
                  profissionais que atuam na área do Direito Público.
                </p>
                <p className={styles.descricaoPt2}>
                  {" "}
                  Assim nasceu a SGP – Soluções em Gestão Pública, uma empresa
                  que veio inovar no mercado de eventos técnicos e jurídicos,
                  capacitação e aperfeiçoamento profissional, editoração de
                  periódicos mensais nas áreas das Licitações e Contratos,
                  Direito Administrativo, Direito Municipal, Direito Tributário,
                  Direito Constitucional, Direito Eleitoral, Direito Urbanístico
                  e Direito Público como um todo, bem como livros de alta
                  relevância para a Administração Pública.
                </p>
                <p>
                  E não parou por aí... A SGP avançou e expandiu suas Soluções,
                  passando a atuar em diversos segmentos de Assessoramentos
                  Técnicos e Jurídicos, por escrito, de forma presencial ou
                  on-line, sob os mais variados temas.{" "}
                </p>
                <p>
                  Tanto nos Cursos e Treinamentos quanto nas mais diversas
                  formas de Assessoramento, a SGP conta com uma equipe altamente
                  qualificada em cada segmento, detentora de um know-how
                  singular, obtido ao longo de mais de 25 anos de experiência no
                  segmento da boa Gestão Pública.{" "}
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
                  altamente qualificada, a SGP apresentou ao mercado sua mais
                  nova Solução: a elaboração de minutas de regulamentos da nova
                  Lei de Licitações e Contratos (Lei nº 14.133/2021), bem como a
                  elaboração de minutas de Regimentos Internos, Leis Orgânicas
                  Municipais, Estatutos de Servidores Públicos Municipais e
                  Reestruturação de Cargos e Salários dos Servidores Municipais.
                </p>
                <p>
                  Esta é a SGP, uma empresa que dia após dia se reinventa,
                  buscando sempre o seu aperfeiçoamento, a fim de cada vez mais
                  criar Soluções inovadoras e eficazes para uma Gestão Pública
                  de excelência.{" "}
                </p>
              </div>
            </div>
            <div className={styles.foto}>
              <Image
                alt="Foto referente a cidade de São Paulo"
                src="/images/homepage/cidadesp.webp"
                height={335}
                width={1216}
              />
              <p>Foto centro de São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.clientesContribuintesAll} id="clientes">
        <div className={styles.clientesContribuintes}>
          <h1 className={styles.titleDarkBlue}>
            Clientes que fazem parte deste sucesso
          </h1>
          <div className={styles.spaceTitleCarousel}>
            <div className={styles.explicacao}>
              <p>
                Contar com clientes em potencial é o que nos motiva como empresa
                a cada ano.
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
        </div>
      </section>

      <section className={styles.comentarios}>
        <div className={styles.comentariosContent}>
          <h1 className={styles.titleDarkBlue}>
            Clientes e Parceiros comentam sobre a SGP...
          </h1>
          <div className={styles.sergio}>
            <div className={styles.nomefoto}>
              <Image
                src={"/images/homepage/sergio.png"}
                alt="Sergio Ferraz - Integrante do Conselho Editorial da SGP "
                width={52}
                height={52}
              />
              <p>
                <b>Sergio Ferraz - </b>
                Integrante do nosso Conselho Editorial
              </p>
            </div>
            <div className={styles.review}>
              <Image
                src={"/images/homepage/rant-stars.svg"}
                alt="Sergio Ferraz - Integrante do Conselho Editorial da SGP "
                width={109}
                height={15.71}
                style={{ width: "auto" }}
              />
              <div className={styles.linhaVertical}></div>
              <p>Avaliação - SGP</p>
            </div>
          </div>
          <p className={styles.comentarioSergio}>
            O periódico SLC - Solução em Licitações e Contratos é uma referência
            imprescindível, tanto para doutrinadores como para exercentes da
            advocacia. Trata-se do mais atualizado e abrangente repositório de
            tudo quanto se produz, em qualquer das vertentes do Direito, no
            campo da constatação administrativa.
          </p>
        </div>
      </section>

      <section
        className={styles.periodicosExclusivosAll}
        id="periodicos-mensais"
      >
        <div className={styles.periodicosExclusivos}>
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
                width={312}
                height={383}
                className={"imgOnHover"}
              />
              <Image
                src={"/images/homepage/periodicos/laranja.png"}
                alt="Foto do centro de São Paulo"
                width={312}
                height={383}
                className={"imgOnHover"}
              />
            </div>
            <div className={styles.carouselIPeriodicos}>
              {carouselPeriodicosExclusivos.carouselFragment}
            </div>
            <div className={styles.controles}>
              <MdOutlineKeyboardArrowLeft
                onClick={carouselPeriodicosExclusivos.slideToPrevItem}
                className={styles.arrowLeft}
              />
              <MdOutlineKeyboardArrowRight
                onClick={carouselPeriodicosExclusivos.slideToNextItem}
                className={styles.arrowRight}
              />
              <span>Clique nos botões para interagir</span>
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
                </div>
                <div className={styles.info}>
                  <h1>{title}</h1>
                  <p>{descricao}</p>
                </div>
              </div>
            ))}
          </div>
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
            <div className={styles.carouselIPeriodicos}>
              {carouselDegustacao.carouselFragment}
            </div>
            <div className={styles.controles}>
              <MdOutlineKeyboardArrowLeft
                onClick={carouselDegustacao.slideToPrevItem}
                className={styles.arrowLeft}
              />
              <MdOutlineKeyboardArrowRight
                onClick={carouselDegustacao.slideToNextItem}
                className={styles.arrowRight}
              />
              <span>Clique nos botões para interagir</span>
            </div>
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

      <section className={styles.obrasExclusivas} id="obras-exclusivas">
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

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=professores`
  );
  const profsAll: ProfessorReq[] = await res.json();

  const imgsCarouselFetch = await await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=2&model=bannerscarousel`
  );

  const imgsJson: ImagensCarousel[] = await imgsCarouselFetch.json();

  const newImgsType = imgsJson.map((obj: any) => {
    const chave = Object.keys(obj)[0];
    const valor = obj[chave];
    return {
      formato: chave,
      nomeclass: `img${chave}`,
      sequencia: valor.sequencia,
      nomearquivoimagem: valor.nomearquivoimagem,
      caminhoarquivologo: valor.caminhoarquivologo,
      caminhoimagem: `${valor.caminhoarquivologo}${valor.nomearquivoimagem}`,
      situacaoimagem: valor.situacaoimagem,
      formatoimagem: valor.formatoimagem,
      caminhohref: valor.caminhohref,
      tituloalthref: valor.tituloalthref,
      textoadicional1: valor.textoadicional1,
      textoadicional2: valor.textoadicional2,
      textoadicional3: valor.textoadicional3,
    };
  });

  const resClientes = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=logosclientesempresas`
  );
  const clientes: ClientesRequisicao[] = await resClientes.json();

  return {
    props: {
      profsAll,
      imgsJson: newImgsType,
      clientes,
    },
  };
}
