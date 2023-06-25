import { ProfessorReq } from "@/typings/Requisicoes/Professores";
import styles from "./CardProfessor.module.scss";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { BsArrowLeftCircle, BsPersonCircle } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";

interface CardProfessorProps {
  professor: ProfessorReq;
  index: number;
}

export function CardProfessor({ professor, index }: CardProfessorProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ProfessorReq>();

  function modalState(content: ProfessorReq) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  }

  return (
    <>
      <div
        key={index}
        className={styles.professor}
        onClick={() => modalState(professor)}
      >
        <Image
          priority
          style={{ maxWidth: "100%", height: "auto" }}
          src={
            `https://www.sgpsolucoes.com.br/crm/imagens_sistema/fotosprofessores/${professor.nomearquivofoto}` ||
            "https://pbs.twimg.com/profile_images/956910864698953730/FDAqZ5hv_400x400.jpg"
          }
          alt={"Professor(a) - " + professor.nome}
          width={294}
          height={362}
          className={"imgOnHover"}
        />
        <div role="button" className={styles.informacoes}>
          <span className={styles.nomeProfessor}>{professor.nome}</span>
          <span className={styles.conferiorInfo}>
            <BsPersonCircle /> Conferir detalhes
          </span>
        </div>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{ zIndex: 9999 }}
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
                  <span>{modalContent?.nome} - Currículo</span>
                </Dialog.Title>
                <div className={styles.contentAboveTitle}>
                  <span>{modalContent?.qualificacao}</span>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
