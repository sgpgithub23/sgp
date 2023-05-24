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

export default function NossosProfessores({
  profsAll,
  errors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    if (errors[0][0].error) {
      notify.error(errors[0][0].error);
    } else {
      notify.error("Erro ao carregar os professores");
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
        <ProfessoresComponent profsAll={profsAll} />
      </div>

      <FooterCompleto />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=professores`
  );
  const profsAll: ProfessorReq[] = await res.json();

  const errors: any[] = [];

  if (profsAll.length === 1) {
    errors.push(profsAll);
  }

  return {
    props: {
      profsAll,
      errors,
    },
  };
}
