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

export default function orcamento() {
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<CursosTreinamentosType>();

  function modalState(content: CursosTreinamentosType) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content)
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
            <b>A SGP Soluções</b> registra todos os momentos especiais para
            nunca esquecer que o mais importante sempre será você{" "}
            <b>nosso cliente</b>.
          </p>
          <Button color="blue" title="Saber Mais!" />
        </div>
      </div>
      <div className={styles.pageSize}>
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
              />
            </div>
          </div>
          <div className={styles.cursosNovos}>
            {Cursos.map((x) => (
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
              />
            </div>
        </div>
        <div className={styles.cursosNovos}>
          {Treinamentos.map((x) => (
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
            <Dialog as="div" style={{zIndex: 40}} onClose={() => setIsModalOpen(false)}>
              <div className={styles.fullBodyModal}>
                <div className={styles.bodyModalStarted}>
                    <Dialog.Panel className={styles.modalPanel}>
                      <div className={styles.voltarParaInicio} onClick={() => setIsModalOpen(false)}>
                        <BsArrowLeftCircle/>
                        <span>Voltar para o início</span>
                      </div>
                      <Dialog.Title
                        as="h3"
                        className={styles.modalTitle}
                      >
                        <p>{modalContent?.title}</p>

                        <span>Objetivo</span>
                      </Dialog.Title>
                      <div className={styles.contentAboveTitle}>
                        <span>
                          {modalContent?.objetivo}
                        </span>
                      </div>
                      <Dialog.Title
                        as="h3"
                        className={styles.modalTitle}
                      >
                        <span>Público Alvo</span>
                      </Dialog.Title>
                      <div className={styles.contentAboveTitle}>
                        <span>
                        {modalContent?.publicoalvo}
                        </span>
                      </div>
                    </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </Transition>
    </div>
  );
}