import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/NossosProfessores.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import ProfessoresComponent from "@/components/Professores";
import Dropdown from "@/components/Dropdown";
import { ProfessorReq } from "@/typings/Requisicoes/Professores";
import { InferGetServerSidePropsType } from "next";
import { notify } from "@/components/Notification";
import { extractErrorMessages } from "@/utils/tratamento-erros";
import { toast } from "react-toastify";

export default function NossosProfessores({
  profsAll,
  errorsProfessores,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  useEffect(() => {
    if (errorsProfessores.length > 0) {
      errorsProfessores.forEach((erro) => toast.error(erro));
    } 
  }, []);

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
          <h1>Conheça nossos professores</h1>
          <hr />
          <p>
            Conheça nosso corpo docente de excelência e gabarito, que aplicam e
            vivenciam as melhores boas práticas do mercado.
          </p>
          <Button color="blue" title="Saber Mais!" />
        </div>
      </div>
      <div className={styles.pageSize}>
        <ProfessoresComponent profsAll={profsAll} errorsProfessores={errorsProfessores} />
      </div>

      <FooterCompleto />
    </div>
  );
}

export async function getServerSideProps() {
  let errorsProfessores: any[] = [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=professores`
  );
  let profsAll: ProfessorReq[] = await res.json();

  errorsProfessores = extractErrorMessages(profsAll);
  
  if (errorsProfessores.length > 0) {
    profsAll = [];
  }

  return {
    props: {
      profsAll,
      errorsProfessores,
    },
  };
}
