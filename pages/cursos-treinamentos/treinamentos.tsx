import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/CursosTreinamentos.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsArrowLeftCircle, BsPersonCircle } from "react-icons/bs";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import { InferGetStaticPropsType } from "next";
import { CursosTreinamentosRequisicao } from "@/typings/Requisicoes/CursosTreinamentos";
import { notify } from "@/components/Notification";
import { ErrorMessageReq } from "@/components/ReqErrorMessage";
import { extractErrorMessages } from "@/utils/tratamento-erros";
import { toast } from "react-toastify";
import FriendlyErrorMessage from "@/components/FriendlyErrorMessage";

export async function getStaticProps() {
  let errorsTreinamentos: any[] = [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=temascursostreinamentos`
  );
  let cursosTreinamentos: CursosTreinamentosRequisicao[] = await res.json();

  errorsTreinamentos = extractErrorMessages(cursosTreinamentos);

  if (errorsTreinamentos.length > 0) {
    cursosTreinamentos = [];
  }

  return {
    props: {
      cursosTreinamentos,
      errorsTreinamentos,
    },
    revalidate: 600,
  };
}

export default function CursosTreinamentos({
  cursosTreinamentos,
  errorsTreinamentos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] =
    useState<CursosTreinamentosRequisicao>();
  const [treinamento, setTreinamento] = useState<string>("");
  const [treinamentosCompletos, setTreinamentosCompletos] =
    useState<CursosTreinamentosRequisicao[]>();

  function modalState(content: CursosTreinamentosRequisicao) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  }

  useEffect(() => {
    if (errorsTreinamentos.length <= 0) {
      const tiposTreinamentos = cursosTreinamentos.filter(
        (x) => x.modalidade.toLowerCase() === "t"
      );
      setTreinamentosCompletos(tiposTreinamentos);
    }
  }, [cursosTreinamentos]);

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
        <div className={styles.bluredBall}></div>
        <div className={styles.headerContent}>
          <h1>Treinamentos</h1>
          <hr />
          <p></p>
        </div>
      </div>
      <div className={styles.pageSize}>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <div className={styles.left}>
              <h2>Confira nossos treinamentos</h2>
              <span>
                Conheça nossos treinamentos de excelência, que aplicam e
                vivenciam as melhores boas práticas do mercado.
              </span>
            </div>
            <div className={styles.right}>
              {errorsTreinamentos.length < 1 && (
                <Input
                  withicon={true}
                  placeholder="Pesquisar curso..."
                  label=""
                  type="text"
                  icon={<HiMagnifyingGlass />}
                  onChange={(e) => setTreinamento(e.target.value)}
                />
              )}
            </div>
          </div>
          {errorsTreinamentos.length <= 0 ? (
            <div className={styles.cursosNovos}>
              {treinamentosCompletos
                ?.filter((p) => {
                  if (treinamento === "" || treinamento?.trim() === "") {
                    return p;
                  } else if (
                    p?.objetivo
                      ?.toLowerCase()
                      .includes(treinamento.toLowerCase()) ||
                    p.titulocursotreinamento
                      ?.toLowerCase()
                      .includes(treinamento.toLowerCase()) ||
                    p.publicoalvo
                      ?.toLowerCase()
                      .includes(treinamento.toLowerCase())
                  ) {
                    return p;
                  }
                })
                .map((x, i) => (
                  <div className={styles.curso} key={i}>
                    <div
                      className={classNames({
                        [styles.isCursoAntigo]:
                          x.modalidade.toLocaleLowerCase() === "t",
                      })}
                    ></div>
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
          ) : (
            <FriendlyErrorMessage commommsg />
          )}
        </div>
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
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
