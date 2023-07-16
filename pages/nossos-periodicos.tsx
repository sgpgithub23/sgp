import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/NossosPeriodicos.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import ProfessoresComponent from "@/components/Professores";
import Dropdown from "@/components/Dropdown";
import {
  anoPeriodico,
  dropdownValuesTipoPeriodico,
  mesPeriodico,
} from "@/utils/nossos-periodicos";
import Image from "next/image";
import BookOpen from "@/public/icons/book-open";
import { notify } from "@/components/Notification";
import Spinner from "@/components/Spinner";
import { PeriodicoDegustacao } from "@/typings/PeriodicosDegustacao";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import FriendlyErrorMessage from "@/components/FriendlyErrorMessage";

type PropsDropdown = {
  label: string;
  value: any;
};

const initialValuesDropdown: PropsDropdown = {
  label: "",
  value: null,
};
export default function NossosPeriodicos() {
  const { push } = useRouter();

  const [periodico, setPeriodico] = useState<PropsDropdown>(
    initialValuesDropdown
  );
  const [ano, setAno] = useState<PropsDropdown>(initialValuesDropdown);
  const [mes, setMes] = useState<PropsDropdown>(initialValuesDropdown);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultDegustacao, setResultDegustacao] = useState<
    PeriodicoDegustacao[]
  >([]);

  const [errorsResultDegustacao, setErrorsResultDegustacao] = useState<
    string[]
  >([]);

  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {}, [isLoading]);

  async function handleSubmit() {
    setErrorsResultDegustacao([]);
    setIsLoading(true);

    const data = {
      tipo: periodico?.label,
      ano: ano?.label,
      mes: String(mes?.value),
    };

    const res = await fetch(`/api/degustacaoperiodicos`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.errors) {
      setIsLoading(false);
      setErrorsResultDegustacao(result.errors);
      setResultDegustacao([]);
      setIsHidden(false);
      return;
    }
    setResultDegustacao(result);
    setIsLoading(false);
    setAno(initialValuesDropdown);
    setMes(initialValuesDropdown);
    setPeriodico(initialValuesDropdown);
    setIsHidden(true);
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
        <div className={styles.bluredBall}></div>
        <div className={styles.headerContent}>
          <h1>Nossos periódicos</h1>
          <hr />
          <p> Edição reduzida para degustação.</p>
        </div>
      </div>
      <div className={styles.pageSize}>
        <div className={styles.periodicos}>
          <div className={styles.left}>
            <h2>Assinale as opções</h2>
            <div className={styles.dropdowns}>
              <div className={styles.individual}>
                <span>Periódico:</span>
                <Dropdown
                  values={dropdownValuesTipoPeriodico}
                  returnedValues={setPeriodico}
                  currentValue={periodico}
                />
              </div>
              <div className={styles.individual}>
                <span>Ano:</span>
                <Dropdown
                  values={anoPeriodico}
                  returnedValues={setAno}
                  currentValue={ano}
                />
              </div>
              <div className={styles.individual}>
                <span>Mês:</span>
                <Dropdown
                  values={mesPeriodico}
                  returnedValues={setMes}
                  currentValue={mes}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button
                color="darkBlue"
                title="Pesquisar periódico"
                disabled={!ano || !mes || !periodico || isLoading}
                onClick={handleSubmit}
              />
              {isLoading && <Spinner />}
            </div>
          </div>

          {resultDegustacao.length > 0 && (
            <div className={styles.periodicosAllMobile}>
              <h3>Periódicos Disponíveis</h3>
              <div className={styles.periodicosDownload}>
                {resultDegustacao.map((periodico) => {
                  return (
                    <Link
                      key={periodico.idperiodico}
                      href={`${process.env.NEXT_PUBLIC_SGP_DNS}${periodico.caminhonomepdfdegustacao}`}
                      className={styles.card}
                      target="_blank"
                    >
                      <p>
                        <span>{`${periodico.tipoperiodico} - ${periodico.mesperiodico} / ${periodico.ano}`}</span>
                        <BsDownload />
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className={styles.right}>
            <div className={styles.slc}>
              <Image
                alt="Solução em Licitações e Contratos"
                width={384}
                height={292}
                src="/images/nossos-periodicos/slc.webp"
                className={"imgOnHover"}
              />
              <span>
                <strong>SLC - </strong>Solução em licitações e contratos
              </span>
            </div>
            <div className={styles.sam}>
              <Image
                alt="Solução em Licitações e Contratos"
                width={384}
                height={292}
                src="/images/nossos-periodicos/sam.webp"
                className={"imgOnHover"}
              />
              <span>
                <strong>SAM - </strong>Solução em direito administrativo e
                municipal
              </span>
            </div>
          </div>
        </div>
        {!isHidden && (
          <div className={styles.errorsPeriodicosDesktop}>
            <FriendlyErrorMessage messages={errorsResultDegustacao} />
          </div>
        )}

        {resultDegustacao.length > 0 && (
          <div className={styles.periodicosAllDesktop}>
            <h3>Periódicos Disponíveis</h3>
            <div className={styles.periodicosDownload}>
              {resultDegustacao.map((periodico) => {
                return (
                  <Link
                    key={periodico.idperiodico}
                    href={`${process.env.NEXT_PUBLIC_SGP_DNS}${periodico.caminhonomepdfdegustacao}`}
                    className={styles.card}
                    target="_blank"
                  >
                    <p>
                      <span>{`${periodico.tipoperiodico} - ${periodico.mesperiodico} / ${periodico.ano}`}</span>
                      <BsDownload />
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className={styles.principaisSolucoesInovadoras}>
          <div className={styles.bluredBall}></div>

          <div className={styles.descricao}>
            <h1>Conheça nossas principais Soluções Inovadoras</h1>
            <Button
              color="blue"
              title="Conheça agora!"
              onClick={() => push("/solucoes-inovadoras")}
            />
            <div>
              <BookOpen strokeColor="#ffffff" />
              <span>
                Caso queira saber mais sobre a empresa SGP Soluções em Gestão
                Pública entre em contato através de nossos canais de
                atendimento.
              </span>
            </div>
          </div>
          <div className={styles.imagem}>
            <Image
              src="/images/nossos-periodicos/homem-apontando.webp"
              height={433}
              width={412}
              alt="Homem aprensentando as principais soluções inovadoras"
              className={"imgOnHover"}
            />
          </div>
        </div>
      </div>

      <FooterCompleto />
    </div>
  );
}
