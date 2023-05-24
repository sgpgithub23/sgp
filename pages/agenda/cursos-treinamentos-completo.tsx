import Head from "next/head";
import React, { FormEvent, Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Agenda.module.scss";
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
import { InferGetStaticPropsType } from "next";
import { AgendaRequisicao } from "@/typings/Requisicoes/Agenda";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=agendaturmas`
  );
  const agenda: AgendaRequisicao[] = await res.json();

  const errors: any[] = [];

  if (agenda.length < 2) {
    errors.push(agenda);
  }

  return {
    props: {
      agenda,
    },
  };
}

export default function Agenda({
  agenda,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<AgendaRequisicao>();
  const [curso, setCurso] = useState<string>("");
  const [treinamento, setTreinamento] = useState<string>("");

  function modalState(content: AgendaRequisicao) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.headerContent}></div>
      </div>
      <div className={styles.pageSize}>
        <div style={{ marginBlock: "50px" }} className={styles.mainContentForm}>
          <div className={styles.introduction} style={{ marginBottom: "40px" }}>
            <div className={styles.left}>
              <h2>Confira nossos cursos</h2>
              <span>
                Conheça nossos cursos de excelência e gabarito, que aplicam e
                vivenciam as melhores boas práticas do mercado.
              </span>
            </div>
            <div className={styles.right}>
              <Input
                withicon={true}
                placeholder="Pesquisar curso..."
                label=""
                type="text"
                icon={<HiMagnifyingGlass />}
                onChange={(e) => setCurso(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.cursosNovos}>
            {agenda
              ?.filter((p) => {
                if (curso === "" || curso?.trim() === "") {
                  return p;
                } else if (
                  p?.objetivo?.toLowerCase().includes(curso.toLowerCase()) ||
                  p.titulocursotreinamento
                    ?.toLowerCase()
                    .includes(curso.toLowerCase()) ||
                  p.publicoalvo?.toLowerCase().includes(curso.toLowerCase()) ||
                  p.presencialonline
                    ?.toLowerCase()
                    .includes(curso.toLowerCase()) ||
                  p.nomeprofessor?.toLowerCase().includes(curso.toLowerCase())
                ) {
                  return p;
                }
              })
              .map((x, i) => (
                <div className={styles.curso} key={i}>
                  <div className={styles.detalhes}>
                    <div
                      className={classNames({
                        [styles.isCursoPresencial]:
                          x.presencialonline.toLocaleLowerCase() ===
                          "presencial",
                        [styles.isCursoAntigo]:
                          x.presencialonline.toLocaleLowerCase() !==
                          "presencial",
                      })}
                    />
                    <span>Data: {x.dataprogamada}</span>
                  </div>
                  <div role="button" onClick={() => modalState(x)}>
                    <h4>
                      <b>{x.titulocursotreinamento}</b>
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
                  <p>{modalContent?.titulocursotreinamento}</p>
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
                <div className={styles.contentAboveTitleProfessor}>
                  <p>Professor</p>
                  <p style={{ textAlign: "center" }}>
                    {modalContent?.nomeprofessor}
                  </p>
                </div>
                <div className={styles.imageAboveTitle}>
                  <Image
                    className={"imgOnHover"}
                    alt={`Foto do(a) professor(a) ${modalContent?.nomeprofessor}`}
                    width={200}
                    height={200}
                    src={`https://www.sgpsolucoes.com.br/imagens/fotosprofessores/${modalContent?.nomearquivofotoprofessor}`}
                  />
                </div>
                <Dialog.Title as="h3" className={styles.modalTitle}>
                  <span>Qualificação do Professor</span>
                </Dialog.Title>
                <div className={styles.contentAboveTitle}>
                  <span>{modalContent?.qualificacaoprofessor}</span>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
