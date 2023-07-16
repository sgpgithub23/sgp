import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/SolucoesInovadoras.module.scss";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { CursosTreinamentosType } from "@/typings/CursosTreinamentos";
import { InfoOrientacoes } from "@/utils/orientacoes";
import { TiposOrientacoes } from "@/utils/tipos-orientacoes";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

export default function SolucoesInovadoras() {
  const { push } = useRouter();

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
          <h1>Orientações SGP</h1>
          <hr />
          <p>
            A Orientação SGP ampliou sua área de atuação. Agora são quatro
            Consultorias pelo preço de uma.
          </p>

          <div className={styles.buttonFrase}>
            <b>Tradicional, tributário e RH | DP | eSocial | Contabilidade</b>
          </div>
        </div>
      </section>
      <section className={styles.topicosOrientacoes}>
        <div className={styles.header}>
          <h1>Orientação SGP Tradicional</h1>
          <p>Atuante na área do Direito Administrativo e Direito Municipal.</p>
          <hr />
        </div>
        <div className={styles.fullLista} id="lista">
          {TiposOrientacoes.map((x, i) => (
            <ul className={styles.topicosLista} key={i}>
              <li className={styles.listaInterna}>
                {x.map((x, i) => (
                  <p key={i}>
                    <AiOutlineCheckCircle />
                    {x}
                  </p>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </section>
      <section className={styles.orientacoesTributarias}>
        <div className={styles.orientacaoSGPTributaria}>
          <div className={styles.textos}>
            <hr />
            <h1>Orientação SGP Tributária</h1>
            <p>
              Atuante na área do Direito Tributário em geral (inclusive
              impostos, taxas e contribuições, nos âmbitos municipal, estadual e
              federal.
            </p>
            {/* <Button
              color="darkBlue"
              title="Envie sua solicitação"
              onClick={() => push("/contato")}
            /> */}
          </div>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/tres-maos.webp"
              width={593}
              className={"imgOnHover"}
              height={385}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
        </div>
        <div className={styles.orientacaoSGPTributaria}>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/pessoas-discutindo.webp"
              width={592}
              height={384}
              className={"imgOnHover"}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
          <div className={styles.textos}>
            <hr />
            <h1>Orientação SGP RH | DP | eSocial</h1>
            <p>
              Atuante nas áreas de Recursos Humanos, Departamento Pessoal e
              eSocial.
            </p>
            {/* <Button
              color="darkBlue"
              title="Envie sua solicitação"
              onClick={() => push("/contato")}
            /> */}
          </div>
        </div>
      </section>

      <section className={styles.orientacoesTributarias}>
        <div
          className={styles.orientacaoSGPTributaria}
          style={{ marginTop: "60px", marginBottom: "100px" }}
        >
          <div className={styles.textos}>
            <hr />
            <h1>Orientação SGP Contabilidade</h1>
            <p>
              Consultoria que atua na área da Contabilidade e Contabilidade
              Pública, Organização Contábil, Gestão, Controle Financeiro,
              Encerramento de Exercício, Prestação de Contas, AUDESP, dentre
              outros assuntos correlatos.
            </p>
            {/* <Button
              color="darkBlue"
              title="Envie sua solicitação"
              onClick={() => push("/contato")}
            /> */}
          </div>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/tres-maos.webp"
              width={593}
              className={"imgOnHover"}
              height={385}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
        </div>
      </section>
      {/* 
      <section className={styles.image}>
        <div className={styles.texto}>
          <hr />
          <p>
            A Orientação SGP presta suporte técnico-jurídico aos assinantes dos
            nossos periódicos mensais, por meio de orientações escritas,
            devidamente balizadas, sempre que possível, em doutrinas e
            jurisprudências atuais.
          </p>
          <p>
            Os assinantes encaminham suas dúvidas e casos concretos por escrito,
            via e-mail ou pelo nosso site, e recebem, num prazo de 24 a 72
            horas, orientações escritas e seguras, que refletem o atual
            entendimento da Orientação SGP e certamente auxiliarão na tomada de
            decisão de cada órgão ou entidade.
          </p>
          <p>
            <Button
              color="blue"
              title="Saber mais"
              onClick={() => {
                push("/contato");
              }}
            />
          </p>
        </div>
      </section> */}

      <section className={styles.assesoriaJuridicaInLoco} id="inloco">
        <div className={styles.texto}>
          <hr />
          <h1>
            Assessoria Jurídica <em>In Loco</em>
          </h1>
          <p>
            Fazemos visitações no órgão ou entidade, a fim de realizar um
            assessoramento pessoal e diferenciado, exclusivamente na área de
            licitações e contratos.
          </p>
          <p>
            Num atendimento totalmente personalizado e exclusivo, nosso Corpo
            Jurídico, com toda sua expertise, poderá fazer quantas visitações
            forem necessárias para atender às suas necessidades administrativas.
          </p>
          <p>
            <Button
              color="blue"
              title="Quero mais informações!"
              onClick={() => push("/contato")}
            />
          </p>
        </div>
      </section>

      <section className={styles.informacoesAssesoriaMentoria}>
        <div className={styles.mentoriaNovaLei}>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/homem-sorrindo.webp"
              width={432}
              height={451}
              className={"imgOnHover"}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
          <div className={styles.textos}>
            <h1>
              Assessoria <em>On-line</em> Hora Certa
            </h1>
            <hr />
            {/* <p>A SGP, pensando em novas soluções para o dia a dia dos nossos clientes, envolvidos na área de licitações e contratos, tanto do setor público como da iniciativa privada, acaba de lançar sua mais nova Solução técnica.</p> */}
            <p>
              Assessoramento exclusivo, prático e dinâmico, que viabilizará o
              esclarecimento de todas as suas dúvidas por blocos temáticos, em
              tempo real, com hora marcada, em atendimento ao vivo por uma
              equipe altamente qualificada.{" "}
            </p>
            {/* <p>Serão painéis on-line, com professores renomados do Direito Público, palestras de duas horas de duração e mais uma hora para esclarecimento de dúvidas ao vivo sobre o tema abordado.</p> */}
            <Button
              id="assessoria-empresas-privadas"
              onClick={() => push("/solucoes-inovadoras/assessoria")}
              color="darkBlue"
              title="Saiba mais!"
            />
          </div>
        </div>
        <div className={styles.assesoriaLicitacoes}>
          <div className={styles.textos}>
            <h1>Assessoria em Licitações Públicas para Empresas Privadas</h1>
            <hr />
            <p>
              A qualidade dos nossos serviços, reconhecida por{" "}
              <strong>entidades e órgãos públicos</strong> em todo Brasil, agora
              à disposição das empresas privada
            </p>
            <p>
              Se você quer vender seus produtos e serviços para o governo, mas
              não sabe como,<strong> podemos assessorá-lo</strong>, desde o
              cadastramento até a participação na licitação ou processo de
              contratação direta.
            </p>
            <Button
              onClick={() => push("/contato")}
              color="darkBlue"
              title="Entre em contato"
            />
          </div>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/homem-no-telefone.webp"
              width={432}
              height={451}
              className={"imgOnHover"}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
        </div>
        <div className={styles.mentoriaNovaLei}>
          <div className={styles.img}>
            <Image
              style={{ maxWidth: "100%", width: "400px", height: "700px" }}
              src="/images/solucoes-inovadoras/mao-escrevendo.webp"
              width={563}
              height={1063}
              className={"imgOnHover"}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
            <b>Mentoria</b>
            <div className={styles.informacoes}>
              <span>12 Encontros</span>
              <span>36 Horas</span>
              <span>Com certificado!</span>
            </div>
          </div>
          <div className={styles.textos}>
            <hr />
            <h1>
              Mentoria da Nova Lei de Licitações e Contratos Administrativos -
              Lei nº 14.133/2021
            </h1>
            <p style={{ marginBottom: "10px" }}>
              Consiste em <strong>12 encontros semanais on-line</strong>,
              totalizando uma carga horária de 36 horas, com expedição de
              Certificado para os participantes.
            </p>
            <p style={{ marginBottom: "10px" }}>
              São painéis on-line, compostos por diversos professores renomados
              do Direito Público, com palestras de duas horas de duração por
              encontro e, posteriormente, mais uma hora para esclarecimento de
              dúvidas ao vivo dos participantes sobre o tema abordado.{" "}
            </p>
            <p style={{ marginBottom: "10px" }}>
              Em cada painel, um tema específico da nova Lei de Licitações e
              Contratos será abordado.{" "}
            </p>
            <p style={{ marginBottom: "10px" }}>
              Ao final dos 12 encontros, a integralidade da Lei nº 14.133/2021
              terá sido analisada, debatida e esclarecida.
            </p>

            <p>
              <strong>Objetivo:</strong> esclarecer todas as dúvidas e
              qualificar adequadamente, em face da nova Lei de Licitações e
              Contratos, com as mais variadas visões de grandes juristas do
              País, todo e qualquer profissional (do setor público ou da
              iniciativa privada) que atue, direta ou indiretamente, com
              licitações, processos de contratação direta e contratos
              administrativos.
            </p>
            <Button
              onClick={() => push("/contato")}
              color="darkBlue"
              title="Entre em contato"
            />
          </div>
        </div>
        <div className={styles.assesoriaLicitacoes}>
          <div className={styles.textos} id="implantacaoleis">
            <h1>Assessoria LGPD</h1>
            <hr />
            <p>
              Assessoramento exclusivo presencial, on-line ou por escrito, em
              face da LGPD - Lei Geral de Proteção de Dados (Lei n° 13.709/2018,
              com redação dada pela Lei nº 13.853/2019), para implantação,
              levantamento de necessidades e soluções.
            </p>
            <p id="pos-graduacao">
              Faça um primeiro diagnóstico, a fim de avaliar se a empresa ou o
              órgão público encontra-se adequado à nova LGPD.
            </p>
            <Button
              onClick={() =>
                push("https://www.sgpsolucoes.com.br/lgpd/checklist-lgpd")
              }
              color="darkBlue"
              title="Entre em contato"
            />
          </div>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/direito.webp"
              width={592}
              height={480}
              className={"imgOnHover"}
              style={{ width: "400px", height: "350px" }}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
          </div>
        </div>
      </section>
      <section className={styles.mbaLicitacoesContratacoesADM}>
        <h1>MBA em Licitações e Contratações da Administração Pública</h1>
        <hr />
        <div>
          <h3>Introdução</h3>
          <p>
            A SGP – Soluções em Gestão Pública, em parceria com Centro de Ensino
            Superior de São Gotardo – CESG, apresenta o curso de MBA On-Line em
            Licitações e Contratações da Administração Pública, em conformidade
            com a nova Lei de Licitações e Contratos Administrativos (Lei n°
            14.133/2021).
          </p>
          <p>
            Conscientes de nossa função institucional e social, temos como
            prioridade evidente a formação, o aperfeiçoamento e a atualização
            dos profissionais das diversas áreas do Direito, que estejam aptos a
            refletir de maneira apropriada acerca dos problemas postos pelo
            Direito na contemporaneidade e produzir literatura de qualidade,
            amparada em sérios procedimentos de pesquisa, a orbitar em torno de
            sua área de concentração.
          </p>
          <p>
            Assim, a função precípua do Programa, que se insere numa instituição
            de ensino privado, é a formação, preparação e diplomação de
            profissionais destinados ao amplo campo de trabalho oferecido na
            área, seja no âmbito público seja no privado.
          </p>
          <p>
            O curso oferece um Corpo Docente composto por pesquisadores
            qualificados em suas respectivas áreas de conhecimento, com
            participação efetiva em todas as dimensões da graduação e
            pós-graduação, como orientação, docência e pesquisa.
          </p>
          <p>
            Dessa forma, a SGP – Soluções em Gestão Pública, de forma eficiente,
            flexível e moderna, atenta às necessidades educacionais e
            conjunturais do mercado de trabalho, oferece à comunidade o curso de
            MBA On-Line em Licitações e Contratações da Administração Pública,
            destinado a profissionais que buscam, por meio do ensino superior de
            qualidade, princípio desta Instituição, oportunidades de atualização
            e especialização em várias áreas do conhecimento.
          </p>
          <p>
            Com a oferta deste curso de MBA, proporcionamos aos profissionais
            envolvidos informações e inovações, detalhadas em cada área
            abrangida, bem como orientações didático-metodológicas, esperando,
            dessa forma, contribuir com o processo educacional perante as
            necessidades nacionais de atualização, revisão e complementação dos
            conhecimentos anteriormente adquiridos.{" "}
          </p>
        </div>
        <div className={styles.objetivosHorarios}>
          <div>
            <Image
              alt="Foto referente ao MBA"
              src="/images/solucoes-inovadoras/mba-imagem-pos.webp"
              width={384}
              className={"imgOnHover"}
              height={384}
              style={{ maxWidth: "100%", width: "460px", height: "auto" }}
            />
          </div>
          <div
            style={{
              color: "#032752",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <p style={{ color: "#032752" }}>
              <strong>Identificação do curso</strong>
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Nome do Curso: </strong>MBA On-Line em Licitações e
              Contratações da Administração Pública
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Nível do curso: </strong>Pós-Graduação MBA Lato Sensu
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Modalidade: </strong>Especialização para o mercado de
              trabalho
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Carga horária: </strong>360 horas
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Amparo Legal: </strong>CNE/CES Resolução nº 1, de 6 de
              abril de 2018
            </p>
            <p style={{ color: "#032752" }}>
              <strong>Duração: </strong>10 meses
            </p>
          </div>
          <div>
            <h3>Objetivo Geral do curso</h3>
            <p>
              O curso de MBA em Licitações e Contratações da Administração
              Pública tem o objetivo de propiciar uma visão moderna, atual,
              prática e dinâmica das Licitações e Contratações Públicas em
              geral, sob todas as suas formas, oferecendo subsídios teóricos e
              práticos, incentivando a pesquisa científica e preparando os
              profissionais no fomento de práticas inovadoras no âmbito jurídico
              e profissional.
            </p>
          </div>
          <div>
            {/* <h3>Objetivo Geral do curso</h3> */}
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
                  Desenvolver competências para a pesquisa e para a produção de
                  conhecimento em Licitações Públicas e Contratos da
                  Administração Pública.
                </span>
              </li>
            </ul>
          </div>
          <div>
            {/* <h3>Objetivo Geral do curso</h3> */}
            <ul>
              <li>
                <AiOutlineCheckCircle />
                <span>
                  As aulas serão on-line e ministradas às sextas-feiras, no
                  período noturno (19h - 23h00min) e aos sábados, no período
                  matutino (8h30 - 12h30) e vespertino (13h30 - 17h30), conforme
                  a carga horária da disciplina.
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
                <span>Carga Horária: 360h</span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>Inscrições abertas no período programado</span>
              </li>
              <li>
                <Button
                  onClick={() => push("/solucoes-inovadoras/mba")}
                  color="darkBlue"
                  title="Quero fazer minha inscrição!"
                />
              </li>
            </ul>
          </div>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/pessoas-prestando-atencao.webp"
              width={387}
              height={301}
              className={"imgOnHover"}
              alt="Três mãos. Uma delas digitando em um notebook cinza, outra escrevendo em uma prancheta e a última está escrevendo e digitando"
            />
            <b>MBA</b>
            <div className={styles.informacoes}>
              <span>12 Encontros</span>
              <span>36 Horas</span>
              <span id="projeto-regulamentacao">Com certificado!</span>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ marginTop: "-50px" }}
        className={styles.informacoesAssesoriaMentoria}
      >
        <div className={styles.mentoriaNovaLei}>
          <div className={styles.img}>
            <Image
              src="/images/solucoes-inovadoras/leis-do-direito.webp"
              width={592}
              height={559}
              className={"imgOnHover"}
              alt="Símbolo do direito e um martelo de madeira"
              style={{ maxWidth: "100%", width: "350px", height: "auto" }}
            />
          </div>
          <div className={styles.textos}>
            <h1>Projeto SGP de Regulamentação e/ou Revisão Legislativa</h1>
            <hr />
            <p>
              {" "}
              A fim de aproveitar ainda mais adequadamente sua equipe altamente
              qualificada, a SGP apresenta ao mercado sua mais nova{" "}
              <strong>Solução Inovadora</strong>: a elaboração de minutas de
              regulamentos da nova Lei de Licitações e Contratos (Lei nº
              14.133/2021), bem como a elaboração de minutas de Regimentos
              Internos, Leis Orgânicas Municipais, Estatutos de Servidores
              Públicos Municipais e Reestruturação de Cargos e Salários dos
              Servidores Municipais.
            </p>
            <Button
              onClick={() => push("/solucoes-inovadoras/projeto-sgp")}
              color="darkBlue"
              title="Saiba mais!"
            />
          </div>
        </div>
      </section>

      {/* <section className={styles.indicacoes}>
        <div className={styles.contentIndicacoes}>
          <hr />
          <h1>
            Porque somos a empresa mais indicada em cursos e treinamentos?
          </h1>
          <div className={styles.listaExplicativa}>
            <ul>
              <li>Profissionais altamente qualificados</li>
              <li>Conteúdo programático completo</li>
              <li>Temas relevantes e atuais</li>
              <li>Saneamento de todas as dúvidas</li>
              <li>Aulas expositivas</li>
              <li>Dinâmicas em grupo</li>
              <li>Alto índice de satisfação</li>
            </ul>
            <ul>
              <li>Conhecimento prático e técnico</li>
              <li>Material didático de qualidade</li>
              <li>Adaptações às necessidades específicas</li>
              <li>Metodologia diferenciada</li>
              <li>Estudos de casos práticos</li>
              <li>Carga horária adequada</li>
              <li>Reconhecimento no mercado</li>
            </ul>
          </div>
        </div>
      </section> */}

      <FooterCompleto />
    </div>
  );
}
