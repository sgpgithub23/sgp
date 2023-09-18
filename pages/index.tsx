import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import { useSpringCarousel } from "react-spring-carousel";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
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
import {  useEffect,  useState } from "react";
import { cloneDeep } from "lodash";
import {
  RegularImageType,
} from "@/typings/Requisicoes/Carrossel";
import { extractErrorMessages } from "@/utils/tratamento-erros";
import { Depoimento } from "@/typings/Depoimentos";


type ImgType = {
  formato: string;
};


export default function Home({
  imgsJson,
  errosClientes,
  errosImagesCarouselPrincipal,
  depoimentos,
  errosDepoimentos,
  clientes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isBrowser = typeof window !== "undefined";
  const initialWidth = isBrowser ? window.innerWidth : 0;

  const { push, asPath, pathname } = useRouter();
  const [windowWidth, setWindowWidth] = useState(initialWidth);
  const [mainCarouselImg, setMainCarouselImg] = useState<RegularImageType[]>(
    cloneDeep(imgsJson)
  );
  const [manualInteraction, setManualInteraction] = useState<boolean>(false);
  const [increment, setIncrement] = useState(0);
  const [auxPathname, setAuxPathname] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (auxPathname === "/#quemsomos") {
      scrollToSection("quemsomos");
      return;
    }

    if (auxPathname === "/#periodicos-mensais") {
      scrollToSection("periodicos-mensais");
      return;
    }
  }, [auxPathname, pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualInteraction) {
        setIncrement((prevIncrement) => prevIncrement + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [manualInteraction]);

  useEffect(() => {
    if (mainCarouselImg.length > 0) {
      carouselApresentacao.slideToNextItem();
    }
  }, [increment]);
  

  function moveCarousel(direction: "next" | "prev") {
    if (
      mainCarouselImg.length > 0 &&
      errosImagesCarouselPrincipal.length <= 0
    ) {
      setManualInteraction(true);
      if (direction === "next") {
        carouselApresentacao?.slideToNextItem();
      }
      if (direction === "prev") {
        carouselApresentacao?.slideToPrevItem();
      }

      // Reiniciar a interação manual após um breve atraso
      setTimeout(() => {
        setManualInteraction(false);
      }, 1000);
    }
  }

  function updateMainCarouselImg(size: string) {
    const auxArr = cloneDeep(imgsJson);
    const auxSize = auxArr.filter((x:ImgType) => x.formato === size);
    setMainCarouselImg(auxSize);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    function atualizarTamanhoViewport() {
      const newWindowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth(newWindowWidth);
      // Rolar para a seção após um pequeno atraso (por exemplo, 100ms)
      setTimeout(() => {
        setAuxPathname(asPath);
      }, 100);
    }

    window.addEventListener("resize", atualizarTamanhoViewport);

    atualizarTamanhoViewport();

    return () => {
      window.removeEventListener("resize", atualizarTamanhoViewport);
    };
  }, []);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    setWindowWidth(viewportWidth);
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 800) {
      updateMainCarouselImg("3400");
    } else if (windowWidth < 800) {
      updateMainCarouselImg("2079");
    }
  }, [windowWidth]);

  const carouselApresentacao = useSpringCarousel({
    withLoop: true,
    itemsPerSlide: 1,
    // @ts-ignore
    items:
      errosImagesCarouselPrincipal.length <= 0
        ? mainCarouselImg.map((x, index: number) => {
  
            return {
              id: String(index),
              renderItem: (
                <Image
                  width={3400}
                  height={2700}
                  src={x.caminhoimagem}
                  alt={x.tituloalthref}
                  priority
                  onClick={() => push(x.caminhohref)}
                  style={{ cursor: "pointer" }}
                />
              ),
            };
          })
        : [
            {
              id: "item-0",
              renderItem: (
                <div
                  style={{
                    backgroundColor: "#032752",
                    color: "white",
                    fontSize: "23px",
                    minWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <p>Ocorreu um erro! </p>
                  <p>
                    Estamos trabalhando para corrigi-lo <br /> o mais rápido
                    possível.
                  </p>
                </div>
              ),
            },
          ],
  });  

  const carouselParceiros = useSpringCarousel({
    itemsPerSlide: errosClientes.length > 0 ? 1 : 2,
    withLoop: true,
    initialActiveItem: 1,
    // @ts-ignore
    items:
      errosClientes.length <= 0
        ? clientes.map((cliente: ClientesRequisicao, index:number) => {
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
          })
        : [
            {
              id: "item-1",
              renderItem: (
                <div
                  style={{
                    color: "#032752",
                    height: "100%",
                    fontSize: "23px",
                    minWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <p>Ocorreu um erro! </p>
                  <p>
                    Estamos trabalhando para corrigi-lo <br /> o mais rápido
                    possível.
                  </p>
                </div>
              ),
            },
          ],
  });

  const carouselDepoimentos = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    // @ts-ignore
    items:
      errosDepoimentos.length <= 0
        ? depoimentos.map((depoimento:Depoimento) => {
            return {
              id: depoimento.iddpmt,
              renderItem: (
                <div className={styles.carouselDepoimentosIndividual}>
                  <div className={styles.depoimento}>
                    <p className={styles.depoimentodescricao}>
                      {depoimento.descricaodepoimento &&
                      depoimento.descricaodepoimento.trim().length > 0 &&
                      depoimento.descricaodepoimento?.length > 0
                        ? depoimento.descricaodepoimento
                        : "Não informado"}
                    </p>
                    <p>
                      <b>Empresa: </b>
                      {depoimento.empresa &&
                      depoimento.empresa.trim().length > 0 &&
                      depoimento.empresa?.length > 0
                        ? depoimento.empresa
                        : "Não informada"}
                    </p>
                    <p style={{ marginBottom: "25px" }}>
                      <b>Cargo: </b>
                      {depoimento.cargoqualificacao &&
                      depoimento.cargoqualificacao.trim().length > 0 &&
                      depoimento.cargoqualificacao?.length > 0
                        ? depoimento.cargoqualificacao
                        : "Não informado"}
                    </p>
                    <em>
                      {" "}
                      ~ Por{" "}
                      {depoimento.nomedepoente &&
                      depoimento.nomedepoente.trim().length > 0 &&
                      depoimento.nomedepoente?.length > 0
                        ? depoimento.nomedepoente
                        : "Não informado"}
                    </em>
                  </div>
                </div>
              ),
            };
          })
        : [
            {
              id: "item-1",
              renderItem: (
                <div
                  style={{
                    color: "#032752",
                    height: "100%",
                    fontSize: "23px",
                    minWidth: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <p>Ocorreu um erro! </p>
                  <p>
                    Estamos trabalhando para corrigi-lo <br /> o mais rápido
                    possível.
                  </p>
                </div>
              ),
            },
          ],
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
              alt="Imagem de um livro aberto"
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
              alt="Imagem de um livro aberto"
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
              alt="Imagem de um livro aberto"
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
              alt="Imagem de um livro aberto com a capa virada para frente"
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
              alt="Foto do livro Solução em direito administrativo e municipal"
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
              alt="Foto do livro Solução em licitações e contrato"
              className={"imgOnHover"}
            />
          </div>
        ),
      },
    ],
  });

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

  const handleScroll25Percent = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.fullPage}>
      {/* <ScrollTracker onScroll25Percent={handleScroll25Percent} /> */}
      {/* <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{ zIndex: 9999 }}
          onClose={() => setIsModalOpen(false)}
        >
          <div
            className={styles.fullBodyModal}
            style={{ backgroundColor: "red", width: "400px", height: "200px" }}
          >
            <div className={styles.bodyModalStarted}>
              <Dialog.Panel className={styles.modalPanel}>
                <div
                  className={styles.voltarParaInicio}
                  onClick={() => setIsModalOpen(false)}
                >
                  <BsArrowLeftCircle />
                  <span>Voltar para o início</span>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition> */}
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className={`${styles.carouselFragment} ${styles.carouselContainer}`}
      >
        <button
          className={styles.slideToPrevItem}
          onClick={() => moveCarousel("prev")}
        >
          <BsArrowLeftCircle />
        </button>
        {carouselApresentacao?.carouselFragment}
        <button
          className={styles.slideToNextItem}
          onClick={() => moveCarousel("next")}
        >
          <BsArrowRightCircle />
        </button>
      </main>
      <section className={styles.quemSomosAll} id="quemsomos">
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
            <div className={styles.fotoSpace}>
              <div className={styles.foto}>
                <Image
                  alt="Foto referente a cidade de São Paulo"
                  src="/images/homepage/sp.webp"
                  height={335}
                  width={1216}
                />
                <p>Foto centro de São Paulo</p>
              </div>
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
                {/* <span>Clique nos botões para interagir</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comentarios}>
        <h1 className={styles.titleDarkBlue}>
          Clientes e Parceiros comentam sobre a SGP...
        </h1>
        <div className={styles.comentariosContent}>
          <div className={styles.carouselDepoimentosSpace}>
            {carouselDepoimentos.carouselFragment}
          </div>
          {errosDepoimentos.length <= 0 && (
            <div className={styles.controles} id="periodicos-mensais">
              <MdOutlineKeyboardArrowLeft
                onClick={carouselDepoimentos.slideToPrevItem}
                className={styles.arrowLeft}
                role="button"
              />
              <MdOutlineKeyboardArrowRight
                role="button"
                onClick={carouselDepoimentos.slideToNextItem}
                className={styles.arrowRight}
              />
              {/* <span>Clique nos botões para interagir</span> */}
            </div>
          )}
        </div>
      </section>

      <section className={styles.periodicosExclusivosAll}>
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
                src={"/images/homepage/periodicos/SAM.webp"}
                alt="Périodo SAM"
                width={312}
                height={383}
                className={"imgOnHover"}
              />
              <Image
                src={"/images/homepage/periodicos/SLC.webp"}
                alt="Periódico SLC"
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
  try {
    const bannersCarouselResponse = await fetch("https://sgpsolucoes.com.br/crm/api/?action=1&model=bannerscarousel");
    const bannersCarouselData = await bannersCarouselResponse.json();
    const [clientesResponse, depoimentosResponse] = await Promise.all([
      fetch("https://sgpsolucoes.com.br/crm/api/?action=1&model=logosclientesempresas"),
      fetch("https://sgpsolucoes.com.br/crm/api/?action=1&model=depoimentos"),
    ]);

    const clientesData = await clientesResponse.json();
    const depoimentosData = await depoimentosResponse.json();

    const errosImagesCarouselPrincipal = extractErrorMessages(bannersCarouselData);
    const errosClientes = extractErrorMessages(clientesData);
    const errosDepoimentos = extractErrorMessages(depoimentosData);

    let newImgsType = [];
    let depoimentosFiltrados = [];

    if (errosImagesCarouselPrincipal.length === 0) {
      newImgsType = bannersCarouselData.map((obj: RegularImageType) => {
        return {
          formato: obj.formatoimagem,
          nomeclass: `img${obj.formatoimagem}`,
          sequencia: obj.sequencia,
          nomearquivoimagem: obj.nomearquivoimagem,
          caminhoarquivologo: obj.caminhoarquivoimagem,
          caminhoimagem: `${obj.caminhoarquivoimagem}${obj.nomearquivoimagem}`,
          situacaoimagem: obj.situacaoimagem,
          formatoimagem: obj.formatoimagem,
          caminhohref: obj.caminhohref,
          tituloalthref: obj.tituloalthref,
          textoadicional1: obj.textoadicional1,
          textoadicional2: obj.textoadicional2,
          textoadicional3: obj.textoadicional3,
          // 2079x3330
        };
      });
    }

    if (errosDepoimentos.length === 0) {
      depoimentosFiltrados = depoimentosData.filter(
        (x:Depoimento) => x.nomedepoente.trim() !== "" && x.empresa.trim() !== ""
      );
    }

    return {
      props: {
        imgsJson: newImgsType,
        clientes: errosClientes.length === 0 ? clientesData : [],
        depoimentos: depoimentosFiltrados,
        errosImagesCarouselPrincipal,
        errosClientes,
        errosDepoimentos,
      },
    };
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return {
      props: {
        imgsJson: [],
        clientes: [],
        depoimentos: [],
        errosImagesCarouselPrincipal: [],
        errosClientes: [],
        errosDepoimentos: [],
      },
    };
  }
}
