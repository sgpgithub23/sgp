import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./FooterCompleto.module.scss";

import Link from "next/link";
import { ItemsMenu } from "../../utils/items-menu";
import { RedesSociaisSGP } from "@/utils/redes-socias";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import classNames from "classnames";

export function FooterCompleto() {
  const { push } = useRouter();
  const ano = new Date().getFullYear();

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
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Image
          role="button"
          onClick={() => push("/")}
          // className={styles.logoNavbar,}
          className={classNames(styles.logoNavbar, "imgOnHover")}
          src={"/logo.svg"}
          loading="lazy"
          width={120}
          height={50}
          alt="Logo do SGP - Soluções em Gestão Públicas"
        />
        <div className={styles.contato}>
          <span>Siga-nos nas redes sociais</span>
          <div>
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
          </div>
        </div>
      </div>
      <div className={styles.informacoes}>
        <h2>Mapa do site</h2>
        <div className={styles.linksSite}>
          <div className={styles.colunas}>
            <Link href={"/"}>Quem somos</Link>
            <Link href={"/nossos-periodicos"}>Periódicos</Link>
            <Link href={"/cursos-treinamentos"}>Cursos e Treinamentos</Link>
            <Link href={"/nossos-professores"}>Nossos Professores</Link>
            <Link href={"/agenda"}>Agenda</Link>
          </div>
          <div className={styles.colunas}>
            <Link href={"/solucoes-inovadoras"}>Soluções Inovadoras</Link>
            {/* <Link href={"/canal-sgp"}>Canal SGP</Link> */}
            <Link href={"/login"}>Área do Cliente</Link>
            <Link href={"/documentacoes"}>Documentações</Link>
            <Link href={"/contato"}>Trabalhe conosco</Link>
            <Link href={"/galeria"}>Galeria de Fotos</Link>
          </div>
          {/* <div className={styles.colunas}> */}
          {/* <Link href="#" style={{ cursor: "not-allowed" }}>
              Notícias
            </Link> */}
          {/* <Link href={"/contato"}>Contato</Link> */}
          {/* </div> */}
          <div className={styles.colunas}>
            {RedesSociaisSGP.map(({ link, name }) => (
              <Link
                href={link}
                key={link}
                target="_blank"
                className={styles.rede}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className={styles.colunas}>
            <p>Brasil</p>
            <p>São Paulo | SP</p>
            <p>República | 01044-903</p>
            <p>Rua Sete de Abril, 252 | 12°</p>
            <p>Andar | Cj: 120/121</p>
          </div>
          <div className={styles.iframeSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.8188347353162!2d-46.64261956112765!3d-23.545530935805044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5851fe63efbb%3A0xdb555a03e320e2b!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Alois!5e0!3m2!1spt-BR!2sbr!4v1686063672901!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={styles.linksSite}>
          <div className={styles.colunasDown}>
            <h2>Central de atendimento</h2>
            <p>(11) 3237 4232</p>
            <p>(11) 9 7443 5898 (WhatsApp)</p>
            <p>atendimento@sgpsolucoes.com.br</p>
            <p>(das 08h30 às 17h30)</p>
          </div>
          <div className={styles.colunasDown}>
            <h2>Políticas</h2>
            <p
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => push("/documentacoes/cookies")}
            >
              Política de Cookies
            </p>
            <p
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => push("/documentacoes/politica-privacidade")}
            >
              Política de Privacidade
            </p>
            <p
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => push("/documentacoes/termos-uso")}
            >
              Termo de Consentimento da Privacidade
            </p>
          </div>
        </div>
      </div>
      <p>
        {ano} &copy; SGP - Soluções em Gestão Públicas | Todos os direitos
        reservados{" "}
      </p>
    </footer>
  );
}
