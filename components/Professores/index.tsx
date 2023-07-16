import { ProfessoresType } from "@/typings/Professores";
import { InfosProfessor } from "@/utils/professores";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { BsArrowLeftCircle, BsPersonCircle } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "../Input";
import styles from "./Professores.module.scss";
import { ProfessorReq } from "@/typings/Requisicoes/Professores";
import { ErrorMessageReq } from "../ReqErrorMessage";
import { CardProfessor } from "@/components/CardProfessor";
import FriendlyErrorMessage from "../FriendlyErrorMessage";

export default function ProfessoresComponent(props: any) {
  const [professores, setProfessores] = useState<ProfessorReq[]>(
    props.profsAll.slice(0, 6)
  );
  const [isFotosIniciais, setIsFotosIniciais] = useState<boolean>(false);
  const [professor, setProfessor] = useState<string>("");

  function changeQuantidadeFotosProfessores() {
    setIsFotosIniciais(!isFotosIniciais);

    if (!isFotosIniciais) {
      setProfessores(props.profsAll);
      return;
    }

    if (isFotosIniciais) {
      setProfessores(props.profsAll.slice(0, 6));
      return;
    }
  }

  return (
    <div className={styles.mainContentForm} id="professores">
      <div className={styles.introduction}>
        <div className={styles.left}>
          <h2>Nossos Professores</h2>
          <span>
            Professores qualificados que transferem conhecimento e experiências.
          </span>
        </div>
        {props.errorsProfessores.length <= 0 && (
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
        )}
      </div>

      {props.errorsProfessores.length <= 0 ? (
        <>
          <div className={styles.professoresTodos}>
            {professores
              ?.filter((p: any) => {
                if (professor === "" || professor?.trim() === "") {
                  return p;
                } else if (
                  p.nome.toLowerCase().includes(professor.toLowerCase()) ||
                  p.qualificacao.toLowerCase().includes(professor.toLowerCase())
                ) {
                  return p;
                }
              })
              .map((x: ProfessorReq, index: any) => (
                <CardProfessor professor={x} index={index} />
              ))}
          </div>
          {professores?.length === 6 ? (
            <p role={"button"} onClick={changeQuantidadeFotosProfessores}>
              Confira a lista completa{" "}
              <b style={{ cursor: "pointer" }}>clicando aqui!</b>
            </p>
          ) : (
            <p
              role={"button"}
              onClick={() => {
                changeQuantidadeFotosProfessores();
              }}
            >
              <b style={{ cursor: "pointer" }}>Ver menos</b>
            </p>
          )}
        </>
      ) : (
        <FriendlyErrorMessage commommsg />
      )}
    </div>
  );
}
