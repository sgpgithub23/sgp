import { ProfessoresType } from "@/typings/Professores";
import { InfosProfessor } from "@/utils/professores";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { BsArrowLeftCircle, BsPersonCircle } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "../Input";
import styles from "./Professores.module.scss";

export default function ProfessoresComponent() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ProfessoresType>();

  const [professores, setProfessores] = useState<ProfessoresType[]>(
    InfosProfessor.slice(0, 6)
  );
  const [isFotosIniciais, setIsFotosIniciais] = useState<boolean>(true);
  const [professor, setProfessor] = useState<string>("");

  function modalState(content: ProfessoresType) {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  }

  function changeQuantidadeFotosProfessores() {
    setIsFotosIniciais(!isFotosIniciais);

    if (!isFotosIniciais) {
      setProfessores(InfosProfessor);
      return;
    }

    if (isFotosIniciais) {
      setProfessores(InfosProfessor.slice(0, 6));
      return;
    }
  }

  return (
    <div className={styles.mainContentForm}>
      <div className={styles.introduction}>
        <div className={styles.left}>
          <h2>Nossos Professores</h2>
          <span>
            Professores qualificados que transferem conhecimento e experiências.
          </span>
        </div>
        <div className={styles.right}>
          <Input
            withicon={true}
            placeholder="Pesquisar professor..."
            label=""
            type="text"
            icon={<HiMagnifyingGlass />}
            onChange={(e) => setProfessor(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.professoresTodos}>
        {InfosProfessor.filter((p) => {
          if (professor === "" || professor?.trim() === "") {
            return p;
          } else if (
            p.nome.toLowerCase().includes(professor.toLowerCase()) ||
            p.linkCurriculo.toLowerCase().includes(professor.toLowerCase())
          ) {
            return p;
          }
        }).map((x, index) => (
          <div key={index} className={styles.professor}>
            <Image
              priority
              style={{ maxWidth: "100%", height: "auto" }}
              src={
                x.img ||
                "https://pbs.twimg.com/profile_images/956910864698953730/FDAqZ5hv_400x400.jpg"
              }
              alt={"Professor(a) - " + x.nome}
              width={294}
              height={362}
            />
            <div role="button" onClick={() => modalState(x)}>
              <span className={styles.nomeProfessor}>{x.nome}</span>
              <span>
                <BsPersonCircle /> Conferir detalhes
              </span>
            </div>
          </div>
        ))}
      </div>
      {professores.length === 6 ? (
        <p role={"button"} onClick={changeQuantidadeFotosProfessores}>
          Confira a lista completa{" "}
          <b style={{ cursor: "pointer" }}>clicando aqui!</b>
        </p>
      ) : (
        <p role={"button"} onClick={changeQuantidadeFotosProfessores}>
          <b style={{ cursor: "pointer" }}>Ver menos</b>
        </p>
      )}

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          style={{ zIndex: 50 }}
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
                  <span>{modalContent?.linkCurriculo}</span>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
