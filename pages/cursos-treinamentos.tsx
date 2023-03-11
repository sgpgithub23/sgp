import Head from "next/head";
import React, { FormEvent, Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/CursosTreinamentos.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import { BsArrowLeftCircle, BsPersonCircle } from "react-icons/bs";
import { Cursos, Treinamentos } from "@/utils/cursos-treinamentos";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export default function CursosTreinamentos() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<CursosTreinamentosType>();
  const [curso, setCurso] = useState<string>("");
  const [treinamento, setTreinamento] = useState<string>("");

  function modalState(content: CursosTreinamentosType) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.bluredBall}></div>
        <div className={styles.headerContent}>
          <h1>Cursos e Treinamentos</h1>
          <hr />
          <p>
            Contamos com uma equipe altamente qualificada de professores,
            verdadeiramente especialistas em cada tema, com vasta bagagem
            acadêmica e efetivo conhecimento prático, proporcionando aos
            participantes a oportunidade de seu aperfeiçoamento e capacitação
            devidamente certificada.
          </p>
          <Button color="blue" title="Saber Mais!" />
        </div>
      </div>
      <div className={styles.pageSize}>
        <div className={styles.tiposDeCurso}>
          <div className={styles.imgOnRightSide}>
            <div>
              <h1>Cursos e Treinamentos On-Line</h1>
              <hr />
              <p>
                Aulas ao vivo, em datas e horários predeterminados, com
                transmissão via internet em plataforma específica,
                interatividade entre aluno e professor, com material didático e
                Certificação.
              </p>
            </div>
            <Image
              src="/images/cursos-treinamentos/homem-olhando-papel.webp"
              alt="Homem olhando pro papel, tentando ler algo"
              width={696}
              height={384}
            />
          </div>
          <div className={styles.imgOnLeftSide}>
            <Image
              src="/images/cursos-treinamentos/mao-no-computador.webp"
              alt="Uma mão mexendo em um notebook, com várias ideias saindo dele em forma gráfica."
              width={696}
              height={384}
            />
            <div>
              <h1>Cursos e Treinamentos EaD</h1>
              <hr />
              <p>
                Aulas já gravadas e editadas, onde os alunos poderão assistir na
                melhor oportunidade, mediante login de acesso e senha, podendo,
                ainda, esclarecer eventuais dúvidas sobre o tema num período de
                7 (sete) dias após o seu respectivo acesso, com material
                didático e Certificação.
              </p>
            </div>
          </div>
          <div className={styles.imgOnRightSide}>
            <div>
              <h1>Cursos e Treinamentos Presenciais</h1>
              <hr />
              <p>
              Aulas presenciais, em sala de aula devidamente equipada, com material didático apropriado, cofee-breaks e Certificação.

              </p>
            </div>
            <Image
              src="/images/cursos-treinamentos/palestra.webp"
              alt="Homem dando aula enquanto pessoas o ouvem com atenção"
              width={696}
              height={384}
              // onLoadingComplete={true}
              placeholder="blur"
              blurDataURL="/images/cursos-treinamentos/palestra.webp"
            />
          </div>
          <div className={styles.imgOnLeftSide}>
            <Image
              src="/images/cursos-treinamentos/arranhaceu.webp"
              alt="Foto de um prédio grande todo espelhado."
              width={696}
              height={384}
            />
            <div>
              <h1>Cursos e Treinamentos <em>In Company</em></h1>
              <hr />
              <p>
              Aulas presenciais ou on-line, especialmente elaboradas para atender às necessidades específicas de seu órgão, entidade ou empresa, tendo em vista suas peculiaridades próprias, que muitas vezes acabam por não ser abordadas em eventos abertos para o público em geral, também com material didático e Certificação.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <div className={styles.left}>
              <h2>Confira nossos cursos</h2>
              <span>
                Conheça nossos cursos de excelência e gabarito, que aplicam e
                vivenciam as melhores boas práticas do mercado.
              </span>
            </div>
            <div className={styles.right}>
              <Input
                withicon
                placeholder="Pesquisar curso..."
                label=""
                type="text"
                icon={<HiMagnifyingGlass />}
                onChange={(e) => setCurso(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.cursosNovos}>
            {Cursos.filter((p) => {
              if (curso === "" || curso?.trim() === "") {
                return p;
              } else if (
                p?.objetivo.toLowerCase().includes(curso.toLowerCase()) ||
                p.title.toLowerCase().includes(curso.toLowerCase()) ||
                p.publicoalvo.toLowerCase().includes(curso.toLowerCase())
              ) {
                return p;
              }
            }).map((x) => (
              <div className={styles.curso}>
                <div
                  className={classNames({
                    [styles.isCursoNovo]: x.cursoNovo,
                    [styles.isCursoAntigo]: !x.cursoNovo,
                  })}
                ></div>
                <div role="button" onClick={() => modalState(x)}>
                  <h4>
                    <b>{x.title}</b>
                  </h4>
                  <p role="button">
                    <span>
                      <BsPersonCircle /> Conferir detalhes
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Confira a lista completa{" "}
            <b style={{ cursor: "pointer" }}>clicando aqui!</b>
          </p>
        </div>
      </div>
      <div className={styles.empresaIndicada}>
        <hr />
        <h2>Porque somos a empresa mais indicada em cursos e treinamentos?</h2>
        <div>
          <ul>
            <li>Profissionais altamente qualificados</li>
            <li>Conteúdo programático completo</li>
            <li>Temas relevantes e atuais</li>
            <li>Saneamento de todas as dúvidas</li>
            <li>Aulas expositivas</li>
            <li>Dinâmicas em grupo</li>
            <li>Carga horária adequada</li>
          </ul>
          <ul>
            <li>Alto índice de satisfação</li>
            <li>Conhecimento prático e técnico</li>
            <li>Material didático de qualidade</li>
            <li>Adaptações às necessidades específicas</li>
            <li>Metodologia diferenciada</li>
            <li>Estudos de casos práticos</li>
            <li>Reconhecimento no mercado</li>
          </ul>
        </div>
      </div>
      <div className={styles.mainContentFormTreinamento}>
        <div className={styles.introduction}>
          <div className={styles.left}>
            <h2>Confira nossos treinamentos</h2>
            <span>
              Conheça nossos treinamentos de excelência e gabarito, que aplicam
              e vivenciam as melhores boas práticas do mercado.
            </span>
          </div>
          <div className={styles.right}>
            <Input
              withicon
              placeholder="Pesquisar treinamento..."
              label=""
              type="text"
              icon={<HiMagnifyingGlass />}
              onChange={(e) => setTreinamento(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.cursosNovos}>
          {Treinamentos.filter((p) => {
            if (treinamento === "" || treinamento?.trim() === "") {
              return p;
            } else if (
              p?.objetivo.toLowerCase().includes(treinamento.toLowerCase()) ||
              p.title.toLowerCase().includes(treinamento.toLowerCase()) ||
              p.publicoalvo.toLowerCase().includes(treinamento.toLowerCase())
            ) {
              return p;
            }
          }).map((x) => (
            <div className={styles.curso}>
              <div
                className={classNames({
                  [styles.isCursoNovo]: x.cursoNovo,
                  [styles.isCursoAntigo]: !x.cursoNovo,
                })}
              ></div>
              <div className={styles.detalhes} onClick={() => modalState(x)}>
                <h4>
                  <b>{x.title}</b>
                </h4>
                <p role="button">
                  <span>
                    <BsPersonCircle /> Conferir detalhes
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Confira a lista completa{" "}
          <b style={{ cursor: "pointer" }}>clicando aqui!</b>
        </p>
      </div>
      <div className={styles.empresaIndicadaBottom}>
        <hr />
        <h2>“O conhecimento é a única coisa que não podem tirar de você”.</h2>
      </div>
      <FooterCompleto />

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{ zIndex: 40 }}
          onClose={() => setIsModalOpen(false)}
        >
          <div className={styles.fullBodyModal}>
            <div className={styles.bodyModalStarted}>
              <Dialog.Panel className={styles.modalPanel}>
                <div
                  className={styles.voltarParaInicio}
                  onClick={() => setIsModalOpen(false)}
                >
                  <BsArrowLeftCircle />
                  <span>Voltar para o início</span>
                </div>
                <Dialog.Title as="h3" className={styles.modalTitle}>
                  <p>{modalContent?.title}</p>

                  <span>Objetivo</span>
                </Dialog.Title>
                <div className={styles.contentAboveTitle}>
                  <span>{modalContent?.objetivo}</span>
                </div>
                <Dialog.Title as="h3" className={styles.modalTitle}>
                  <span>Público Alvo</span>
                </Dialog.Title>
                <div className={styles.contentAboveTitle}>
                  <span>{modalContent?.publicoalvo}</span>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
