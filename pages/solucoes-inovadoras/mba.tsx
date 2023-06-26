import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Mba.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import Image from "next/image";
import { AiOutlineCheckCircle, AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { RedesSociaisSGP } from "@/utils/redes-socias";
import Link from "next/link";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { FormMBA } from "@/typings/FormMba";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  endereco: yup.string().required("Campo obrigatório"),
  bairro: yup.mixed().nullable().required("A file is required"),
  cidade: yup.string().required("Campo obrigatório"),
  estado: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  celular: yup.string().required("Campo obrigatório"),
  telefoneCompl: yup.string().required("Campo obrigatório"),
  tipoPagamento: yup
    .array()
    .of(yup.string().nullable())
    .required("Campo obrigatório"),
  anexo: yup.mixed().required("*Avatar image is required"),
});

const initialValues = {
  nome: "",
  cpf: "",
  endereco: "",
  cep: "",
  bairro: "",
  cidade: "",
  estado: "",
  email: "",
  celular: "",
  telefoneCompl: "",
  tipoPagamento: "",
  anexo: null,
};

const tiposPagamento = [
  { id: "pix", label: "PIX" },
  { id: "boleto", label: "Boleto Bancário" },
  { id: "depositoCaixa", label: "Depósito Caixa Econômica Federal" },
  { id: "tedCaixa", label: "TED Caixa Econômica Federal" },
  { id: "debito", label: "Cartão de Débito" },
  { id: "credito", label: "Cartão de Crédito" },
  { id: "naoPagar", label: "Não realizei o pagamento ainda" },
];

export default function SolucoesInovadoras() {
  const { push } = useRouter();
  const [inputFileName, setInputFileName] = useState<string>(
    "Clique aqui para escolher o arquivo"
  );

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    getValues,
    reset,
  } = useForm<FormMBA>({
    defaultValues: initialValues,
    mode: "all",
    resolver: yupResolver(schema),
  });

  function getIconByName(rede: string) {
    if (rede === "Facebook") {
      return <BsFacebook />;
    }

    if (rede === "Youtube") {
      return <BsYoutube />;
    }

    if (rede === "LinkedIn") {
      return <BsLinkedin />;
    }

    if (rede === "Twitter") {
      return <BsTwitter />;
    }

    if (rede === "Instagram") {
      return <BsInstagram />;
    }
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
      <section className={styles.content}>
        <div className={styles.bluredBall}></div>
        <div className={styles.headerContent}>
          <div className={styles.left}>
            <div className={styles.mainTitle}>
              <h1> MBA em Licitações </h1>
              <hr />
            </div>
            <p>
              Você sabia que conhecimento é o único bem que ninguém pode tirar
              de você?
            </p>
            <b>MBA em Licitações e Contratações da Administração Pública.</b>
            <p>
              Na SGP - Soluções em Gestão Pública há um time de professores
              altamente qualificados !!!
            </p>
          </div>
          <div className={styles.center}>
            <div>
              <b>Faça agora sua inscrição!</b>
              <p>Com parcelas que cabem no seu bolso</p>
            </div>
            <div>
              <h3>
                Até 10 parcelas <br /> Matrícula R$ 680,00{" "}
                <b> + 9 parcelas de R$ 680,00 </b>
              </h3>
              <span>(somente no cartão de crédito ou boleto bancário)</span>
            </div>
            <div>
              <p>
                {" "}
                ou <b>5% </b>de desconto <b>à vista</b>
              </p>
              <span>(PIX, Depósito, TED, Cartão de Débito)</span>
            </div>
          </div>
          {/* <div className={styles.right}>
            <Image
              alt="Fly falando sobre o MBA Online em licitações e contratações da administração Pública"
              src="/images/solucoes-inovadoras/mba/mba.webp"
              width={453}
              className={"imgOnHover"}
              height={323}
            />
            <div className={styles.title}>
              <h1> MBA em Licitações </h1>
              <hr />
            </div>
          </div> */}
        </div>
      </section>
      <div className={styles.pageSize}>
        <section className={styles.professores}>
          <h1>Corpo docente</h1>
          <p>
            Conheça nosso corpo docente de excelência e gabarito, que aplicam e
            vivenciam as melhores boas práticas do mercado.
          </p>
          <Button
            onClick={() => push("../nossos-professores")}
            color="darkBlue"
            title="Ver todos os professores"
          />
        </section>
        <section className={styles.mbaLicitacoesContratacoesAdmPublica}>
          <h1>MBA em Licitações e Contratações da Administração Pública</h1>
          <hr />
          <div className={styles.infosCurso}>
            <div className={styles.objGeralCurso}>
              <h2>Objetivo Geral do curso</h2>
              <p>
                {" "}
                O curso de MBA On-Line em Licitações e Contratações da
                Administração Pública tem o objetivo de propiciar uma visão
                moderna, atual, prática e dinâmica das Licitações e Contratações
                Públicas em geral, sob todas as suas formas, oferecendo
                subsídios teóricos e práticos, incentivando a pesquisa
                científica e preparando os profissionais no fomento de práticas
                inovadoras no âmbito jurídico e profissional.
              </p>
            </div>
            <div className={styles.objEspecificoCurso}>
              <h2>Objetivo específicos do curso </h2>
              <ul>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    Capacitar profissionais para atuação nas demandas de
                    Licitações Públicas e Contratos da Administração Pública;
                  </span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    Qualificar profissionais para a prática dos processos de
                    contratação, desde a fase interna até a execução contratual;
                  </span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    Estimular a produção acadêmica e o debate crítico sobre as
                    questões interdisciplinares, envolvendo a área do Direito e
                    suas interfaces;
                  </span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    Desenvolver competências para a pesquisa e para a produção
                    de conhecimento em Licitações Públicas e Contratos da
                    Administração Pública.
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.horarioELocal}>
              <h2>Conheça os dias, horários e local do curso</h2>
              <ul>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    As aulas serão on-line e ministradas às sextas-feiras, no
                    período noturno (das 19h às 23h), e aos sábados, nos
                    períodos matutino (das 8h30 às 12h30) e vespertino (das
                    13h30 às 17h30), conforme a carga horária da disciplina.
                  </span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>
                    As aulas serão ofertadas preferencialmente duas vezes por
                    semana.
                  </span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>Carga Horária: 360 horas.</span>
                </li>
                <li>
                  <AiOutlineCheckCircle />
                  <span>Inscrições abertas no período programado.</span>
                </li>
                <li>
                  <Button
                    color="darkBlue"
                    title="Quero fazer minha inscrição!"
                  />
                </li>
              </ul>
            </div>
            <div className={styles.imgSpace}>
              <div className={styles.img}>
                <Image
                  className={"imgOnHover"}
                  src="/images/solucoes-inovadoras/pessoas-prestando-atencao.webp"
                  width={387}
                  height={301}
                  alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
                />
                <b>MBA</b>
                <div className={styles.informacoes}>
                  <span>12 Encontros</span>
                  <span>36 Horas</span>
                  <span>Com certificado!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.conteudoProgramatico}>
          <h1>Conteúdo Programático</h1>
          <hr />
          <div className={styles.conteudosListados}>
            <ul className={styles.parte1}>
              <li>
                <b>1.</b>
                <span> Evolução das Licitações Públicas</span>
              </li>
              <li>
                <b>2.</b>
                <span> Administração Pública Descomplicada – Parte I</span>
              </li>
              <li>
                <b>3.</b>
                <span> Administração Pública Descomplicada – Parte II</span>
              </li>
              <li>
                <b>4.</b>
                <span>
                  {" "}
                  Planejamento Prévio das Contratações Públicas – Parte I
                </span>
              </li>
              <li>
                <b>5.</b>
                <span>
                  {" "}
                  Planejamento Prévio das Contratações Públicas – Parte II
                </span>
              </li>
              <li>
                <b>6.</b>
                <span>
                  {" "}
                  Planejamento Prévio das Contratações Públicas – Parte III
                </span>
              </li>
              <li>
                <b>7.</b>
                <span>
                  {" "}
                  Impacto ambiental e planejamento urbanístico nas Licitações –
                  Parte I
                </span>
              </li>
              <li>
                <b>8.</b>
                <span>
                  {" "}
                  Impacto ambiental e planejamento urbanístico nas Licitações –
                  Parte II
                </span>
              </li>
              <li>
                <b>9.</b>
                <span>
                  {" "}
                  Impacto ambiental e planejamento urbanístico nas Licitações –
                  Parte III
                </span>
              </li>
              <li>
                <b>10.</b>
                <span>
                  {" "}
                  Projeto Básico, Projeto Executivo, Termo de Referência,
                  Anteprojeto e Estudo Técnico Preliminar – Parte I
                </span>
              </li>
              <li>
                <b>11.</b>
                <span>
                  {" "}
                  Projeto Básico, Projeto Executivo, Termo de Referência,
                  Anteprojeto e Estudo Técnico Preliminar – Parte II
                </span>
              </li>
              <li>
                <b>12.</b>
                <span>
                  {" "}
                  Projeto Básico, Projeto Executivo, Termo de Referência,
                  Anteprojeto e Estudo Técnico Preliminar – Parte III
                </span>
              </li>
            </ul>
            <ul className={styles.parte2}>
              <li>
                <b>13.</b>
                <span> Terceirização lícita e terceirização ilícita </span>
              </li>
              <li>
                <b>14.</b>
                <span> Contratação Direta – Parte I</span>
              </li>
              <li>
                <b>15.</b>
                <span> Contratação Direta – Parte II</span>
              </li>
              <li>
                <b>16.</b>
                <span> Contratação Direta – Parte III</span>
              </li>
              <li>
                <b>17.</b>
                <span> Processo Licitatório – Parte I</span>
              </li>
              <li>
                <b>18.</b>
                <span> Processo Licitatório – Parte II</span>
              </li>
              <li>
                <b>19.</b>
                <span> Processo Licitatório – Parte III</span>
              </li>
              <li>
                <b>20.</b>
                <span> Processo Licitatório – Parte VI</span>
              </li>
              <li>
                <b>21.</b>
                <span> Obras e serviços de engenharia – Parte I</span>
              </li>
              <li>
                <b>22.</b>
                <span> Obras e serviços de engenharia – Parte II</span>
              </li>
              <li>
                <b>23.</b>
                <span> Obras e serviços de engenharia – Parte III</span>
              </li>
              <li>
                <b>24.</b>
                <span> Contratações verdes ou sustentáveis – Parte I</span>
              </li>
              <li>
                <b>25.</b>
                <span> Contratações verdes ou sustentáveis – Parte II</span>
              </li>
              <li>
                <b>26.</b>
                <span> Licitações internacionais</span>
              </li>
              <li>
                <b>27.</b>
                <span>
                  {" "}
                  Pequenas empresas nas licitações públicas – Parte I
                </span>
              </li>
              <li>
                <b>28.</b>
                <span>
                  {" "}
                  Pequenas empresas nas licitações públicas – Parte II
                </span>
              </li>
              <li>
                <b>29.</b>
                <span>
                  {" "}
                  Procedimentos auxiliares (credenciamento, pré-qualificação,
                  procedimento de manifestação de interesse, sistema de registro
                  de preços, registro cadastral) – Parte I
                </span>{" "}
              </li>
            </ul>
            <ul className={styles.parte3}>
              <li>
                <b>30.</b>
                <span>
                  {" "}
                  Procedimentos auxiliares (credenciamento, pré-qualificação,
                  procedimento de manifestação de interesse, sistema de registro
                  de preços, registro cadastral) – Parte II
                </span>
              </li>
              <li>
                <b>31.</b>
                <span>
                  {" "}
                  Procedimentos auxiliares (credenciamento, pré-qualificação,
                  procedimento de manifestação de interesse, sistema de registro
                  de preços, registro cadastral) – Parte III
                </span>
              </li>
              <li>
                <b>32.</b>
                <span> Formalização dos contratos – Parte I</span>
              </li>
              <li>
                <b>33.</b>
                <span> Formalização dos contratos – Parte II</span>
              </li>
              <li>
                <b>34.</b>
                <span> Execução contratual – Parte I</span>
              </li>
              <li>
                <b>35.</b>
                <span> Execução contratual – Parte II</span>
              </li>
              <li>
                <b>36.</b>
                <span>
                  {" "}
                  Extinção dos contratos e aplicação de sanções – Parte I
                </span>
              </li>
              <li>
                <b>37.</b>
                <span>
                  {" "}
                  Extinção dos contratos e aplicação de sanções – Parte II
                </span>
              </li>
              <li>
                <b>38.</b>
                <span>
                  {" "}
                  Extinção dos contratos e aplicação de sanções – Parte III
                </span>
              </li>
              <li>
                <b>39.</b>
                <span> Gestão e fiscalização contratual – Parte I</span>
              </li>
              <li>
                <b>40.</b>
                <span> Gestão e fiscalização contratual – Parte II</span>
              </li>
              <li>
                <b>41.</b>
                <span> Acordos Administrativos em Licitações</span>
              </li>
            </ul>
            <ul className={styles.parte4}>
              <li>
                <b>42.</b>
                <span> Crimes licitatórios – Parte I </span>
              </li>
              <li>
                <b>43.</b>
                <span> Crimes licitatórios – Parte II</span>
              </li>
              <li>
                <b>44.</b>
                <span>
                  {" "}
                  Métodos alternativos de solução de conflitos na lei de
                  licitações – Parte I
                </span>
              </li>
              <li>
                <b>45.</b>
                <span>
                  {" "}
                  Métodos alternativos de solução de conflitos na lei de
                  licitações – Parte II
                </span>
              </li>
              <li>
                <b>46.</b>
                <span> Licitações e Contratos nas Estatais – Parte I</span>
              </li>
              <li>
                <b>47.</b>
                <span> Licitações e Contratos nas Estatais – Parte II</span>
              </li>
              <li>
                <b>48.</b>
                <span> Licitações e Contratos nas Estatais – Parte III</span>
              </li>
              <li>
                <b>49.</b>
                <span>
                  {" "}
                  Licitação e contratação de serviços de publicidade prestados
                  por agências de propaganda – Parte I
                </span>
              </li>
              <li>
                <b>50.</b>
                <span>
                  {" "}
                  Licitação e contratação de serviços de publicidade prestados
                  por agências de propaganda – Parte II
                </span>
              </li>
              <li>
                <b>51.</b>
                <span>
                  {" "}
                  Parcerias na Administração Pública e outros instrumentos –
                  Parte I
                </span>
              </li>
              <li>
                <b>52.</b>
                <span>
                  {" "}
                  Parcerias na Administração Pública e outros instrumentos –
                  Parte II
                </span>
              </li>
            </ul>
            <ul className={styles.parte5}>
              <li>
                <b>53.</b>
                <span>
                  {" "}
                  Parcerias na Administração Pública e outros instrumentos –
                  Parte III
                </span>
              </li>
              <li>
                <b>54.</b>
                <span>
                  {" "}
                  Responsabilização do Poder Público e seus agentes – Parte I
                </span>
              </li>
              <li>
                <b>55.</b>
                <span>
                  {" "}
                  Responsabilização do Poder Público e seus agentes – Parte II
                </span>
              </li>
              <li>
                <b>56.</b>
                <span> Processo Administrativo Disciplinar e Sindicância</span>
              </li>
              <li>
                <b>57.</b>
                <span> Improbidade administrativa – Parte I</span>
              </li>
              <li>
                <b>58.</b>
                <span> Improbidade administrativa – Parte II</span>
              </li>
              <li>
                <b>59.</b>
                <span> Controle interno e Controle Externo – Parte I</span>
              </li>
              <li>
                <b>60.</b>
                <span> Controle interno e Controle Externo – Parte II</span>
              </li>
              <li>
                <b>61.</b>
                <span> Teoria Geral dos Convênios</span>
              </li>
              <li>
                <b>62.</b>
                <span> Elaboração de pareceres – Parte I</span>
              </li>
              <li>
                <b>63.</b>
                <span> Elaboração de pareceres – Parte II</span>
              </li>
              <li>
                <b>64.</b>
                <span> Elaboração de pareceres – Parte III</span>
              </li>
              <li>
                <b>65.</b>
                <span> Metodologia de Pesquisa</span>
              </li>
              <li>
                <b>66.</b>
                <span> Didática no Ensino Superior (Optativa)</span>
              </li>
            </ul>
          </div>
          <Button
            color="darkBlue"
            title="Ver conteúdo completo"
            onClick={() => push("conteudo-programatico")}
          />
        </section>

        <section className={styles.avaliacoes}>
          <div className={styles.criteriosAvaliacoes}>
            <h1>Critérios de avaliação</h1>
            <hr />
            <ul>
              <li>
                <b>{"a)"}</b> A avaliação do rendimento escolar do aluno será
                feita atribuindo-se notas de 0 (zero) a 100 (cem) a um artigo
                técnico a ser elaborado e entregue antes do término do curso. Os
                5 (cinco) melhores artigos serão publicados em pelo menos um dos
                periódicos técnicos da SGP – Soluções em Gestão Pública;
              </li>
              <li>
                <b>{"b)"}</b> Os alunos receberão nota em diversas atividades
                solicitadas em aula;
              </li>
              <li>
                <b>{"c)"}</b> A frequência é obrigatória e, para aprovação, será
                necessária presença igual ou superior a 75% (setenta e cinco por
                cento) do curso, entrega de até 75% (setenta e cinco por cento)
                de todas as atividades e nota final igual ou superior a 70%
                (setenta por cento).
              </li>
              <li>
                <b>{"d)"}</b> A avaliação do TCC – Trabalho de Conclusão de
                Curso será feita pelo professor orientador e dar-se-á por meio
                da apresentação de texto escrito, em conformidade com a
                disciplina “Didática no Ensino Superior”. O TCC é facultativo.
              </li>
              <li>
                <b>{"e)"}</b> É considerado aprovado o aluno que, cumpridos
                todos os quesitos exigidos, obtiver, na média final, nota igual
                ou superior a 70 (sessenta).
              </li>
              <li>
                <b>{"f)"}</b> O prazo máximo para entrega final do TCC é de 06
                (seis) meses após a conclusão do curso.
              </li>
            </ul>
          </div>
          <div className={styles.certificado}>
            <h1>Certificado</h1>
            <hr />
            <div className={styles.infosCertificado}>
              <p>Somente será conferido Certificado de MBA ao estudante que:</p>

              <ul className={styles.opcoes}>
                <li>
                  <b>{"a)"}</b> Lograr aprovação em todas as disciplinas;
                </li>
                <li>
                  <b>{"b)"}</b> Obtiver frequência mínima exigida;
                </li>
                <li>
                  <b>{"c)"}</b> Estiver com todas as mensalidades quitadas.
                </li>
              </ul>

              <p>
                {" "}
                Apenas os alunos que tiverem presença igual ou superior a 75%
                (setenta e cinco por cento) da disciplina “Didática no Ensino
                Superior”, entregarem o TCC no prazo e obtiverem nota igual ou
                superior a 70 (sessenta), receberão a Certificação de Aptidão
                para a Docência no Ensino Superior.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.headerBottom}></section>
      <section className={styles.passoAPasso}>
        <h1>Siga o passo a passo.</h1>
        <hr />
        <div className={styles.stepsInfos}>
          <div className={styles.solitacaoInscricao}>
            <div className={styles.headerTopico}>
              <AiOutlineCheckCircle />
              <h3>Passo 1 - É nos enviar sua solicitação de inscrição:</h3>
            </div>
            <p>
              Digite os seus dados abaixo para iniciarmos o processo de registro
              da solicitação. É importante que os dados estejam corretos para
              que não haja problema no envio do livro.
            </p>
          </div>

          <div className={styles.comprovantePagamento}>
            <div className={styles.headerTopico}>
              <AiOutlineCheckCircle />
              <h3>Passo 3 - Enviar comprovante de pagamento:</h3>
            </div>
            <p>
              Após pagamento envie o comprovante para a SGP - Soluções em Gestão
              Pública no e-mail atendimento@sgpsolucoes.com.br , ou, anexo a
              solicitação abaixo, para que possamos agilizar o processo de envio
              e registrar em nosso controle!!!
            </p>
          </div>

          <div className={styles.realizarPagamento}>
            <div className={styles.headerTopico}>
              <AiOutlineCheckCircle />
              <h3>Passo 2 - Realizar o pagamento por um dos canais:</h3>
            </div>
            <p>Há 6 (seis) vias de possibilidade de pagamento:</p>
            <p>
              1 - PIX: Chave: 29759932000102 | SGP - Soluções em Gestão Pública
              | CNPJ: 29.759.932/0001-02 | Banco: 104 Caixa Econômica Federal |
              Ag.: 1679 | Conta Corrente: 3184-4
            </p>
            <p>
              2 - Boleto: É necessário que o cliente solicite-o junto a SGP -
              Soluções em Gestão Pública no canal de comunicação WhatsApp 11 9
              7443 5898 !!!
            </p>
            <p>
              3 - Depósito: SGP - Soluções em Gestão Pública | CNPJ:
              29.759.932/0001-02 | Banco: 104 Caixa Econômica Federal | Ag.:
              1679 | Conta Corrente: 3184-4
            </p>
            <p>
              4 - TED: SGP - Soluções em Gestão Pública | CNPJ:
              29.759.932/0001-02 | Banco: 104 Caixa Econômica Federal | Ag.:
              1679 | Conta Corrente: 3184-4
            </p>
            <p>
              5 - Cartão de Débito: Após cadastramento realizado abaixo
              (registro da solicitação), você será direcionado à tela de
              "Pagamento com Cartão de Débito | Operadora CIELO".
            </p>
            <p>
              6 - Cartão de Crédito: Após cadastramento realizado abaixo
              (registro da solicitação), você será direcionado à tela de
              "Pagamento com Cartão de Crédito | Operadora CIELO".
            </p>
          </div>

          <div className={styles.boletoBancario}>
            <div className={styles.headerTopico}>
              <AiOutlineCheckCircle />
              <h3>
                Pagamento via Boleto Bancário consulte a SGP - Soluções em
                Gestão Pública.
              </h3>
            </div>
            <p>
              A postagem do livro nos CORREIOS será realizada somente após o
              pagamento do VALOR DO PRODUTO + FRETE e, consequentemente, o
              apontamento correto do ENDEREÇO DE ENTREGA, confirmado pelo
              comprador.
            </p>

            <div className={styles.duvidas}>
              <h3>Está com dúvidas?</h3>
              <p>Central de Atendimento</p>

              <ul>
                <li>
                  <BsTelephone />
                  <span>(11) 3237 4232</span>
                </li>
                <li>
                  <BsTelephone />
                  <span>(11) 9 7443 5898</span>
                </li>
                <li>
                  <AiOutlineMail />
                  <span>atendimento@sgpsolucoes.com.br</span>
                </li>
                <li>
                  {RedesSociaisSGP.map(({ link, name }) => (
                    <Link
                      href={link}
                      key={link}
                      target="_blank"
                      className={styles.rede}
                    >
                      {getIconByName(name)}
                    </Link>
                  ))}
                </li>
              </ul>
              <Button color="blue" title="Prosseguir para o próximo passo" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.dadosPagamentoContato}>
        <h1>
          Os campos são obrigatórios e é imprescindível o correto preenchimento
          para <b>envio do produto e emissão da nota fiscal!</b>
        </h1>
        <form>
          <div className={styles.formContato}>
            <Input
              type="text"
              label="Nome completo*"
              register={register("nome")}
              placeholder="Ex.: João Ramalho de Souza Filho"
              error={errors.nome?.message}
            />

            <Input
              type="text"
              label="CPF*"
              register={register("cpf")}
              error={errors.cpf?.message}
              placeholder="999.999.999-99"
              mask="999.999.999-99"
            />

            <Input
              name="endereco"
              type="text"
              label="E-mail"
              register={register("endereco")}
              error={errors.endereco?.message}
              placeholder="R. João Gomes"
            />

            <Input
              name="cep"
              label="CEP*"
              register={register("cep")}
              error={errors.cep?.message}
              placeholder="12323-222"
              mask="99999-999"
            />

            <Input
              name="cidade"
              type="text"
              label="Cidade"
              register={register("cidade")}
              error={errors.cidade?.message}
              placeholder="Osasco "
            />

            <Input
              name="estado"
              label="Estado"
              register={register("estado")}
              error={errors.celular?.message}
              placeholder="São Paulo"
            />

            <Input
              name="email"
              label="E-mail*"
              register={register("email")}
              error={errors.email?.message}
              placeholder="email@dominio.xxx.xx"
            />

            <Input
              name="celular"
              type="text"
              label="Celular*"
              register={register("celular")}
              error={errors.celular?.message}
              placeholder="(13) 99999-9999"
              mask="(99) 99999-9999"
            />

            <Input
              name="telefoneCompl"
              type="text"
              label="Telefone Coml"
              register={register("telefoneCompl")}
              error={errors.telefoneCompl?.message}
              placeholder="(13) 99999-9999"
              mask="(99) 99999-9999"
            />

            <div>
              <div className={styles.opcoesPagamento}>
                <p>Indique abaixo a via de pagamento que foi utilizada: *</p>
                <div>
                  {tiposPagamento.map((x, i) => (
                    <div className={styles.inputRadio} key={i}>
                      <input
                        type="radio"
                        id={x.id}
                        name="tipoPagamento"
                        value={x.label}
                      />
                      <label htmlFor={x.id}>{x.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={styles.anexo}>
                <p>Indique abaixo a via de pagamento que foi utilizada: *</p>

                <Input
                  name="anexo"
                  as="file"
                  label={inputFileName}
                  register={register("anexo")}
                  error={errors.anexo?.message}
                  onChange={(e) => {
                    setInputFileName(e.target.value.split("\\")[2]);
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.cienciaSobCompra}>
            <div>
              <b>
                "Estou ciente que o livro só será enviado após confirmação do
                pagamento pela SGP - Soluções em Gestão Pública."
              </b>
              <p>
                Após o envio de seus dados, você receberá um e-mail de
                confirmação de solicitação de compra. Caso não receba o e-mail
                de confirmação, contate a SGP - Soluções em Gestão Pública para
                verificar o que ocorreu. Lembre-se, o envio do livro será
                realizado após confirmação de pagamento.
              </p>
              <p>
                Estou ciente também de que os dados enviados à empresa SGP -
                Soluções em Gestão Pública, que são dados pessoais e sensíveis
                de minha propriedade, assim como dados da empresa, do órgão
                público ou da entidade, serão concedidos e utilizados sob os
                critérios abaixo, de acordo com a{" "}
                <b>
                  {" "}
                  Política de Privacidade para Proteção de Dados mencionada na
                  Lei Geral de Proteção de Dados - LGPD:
                </b>
              </p>
            </div>
            <p>Ao enviar os dados do formulário: </p>
            <ul>
              <li>
                <AiOutlineCheckCircle />
                <span>
                  Estou ciente e aceito a <b> Política de Cookies *</b>
                </span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>
                  Estou ciente e aceito a <b>Política de Privacidade *</b>
                </span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>
                  Estou ciente e aceito o{" "}
                  <b>Termo de Consentimento da Privacidade *</b>
                </span>
              </li>
            </ul>
            <div className={styles.buttonPosition}>
              <Button
                color="darkBlue"
                title="Enviar dados preenchidos"
                disabled={isSubmitting || !isValid}
              />
            </div>
          </div>
        </form>
      </section>
      <FooterCompleto />
    </div>
  );
}
