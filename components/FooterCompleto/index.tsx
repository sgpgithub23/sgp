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
          className={styles.logoNavbar}
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
              <Link href={link} key={link} className={styles.rede}>
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
            <Link href={"/quem-somos"}>Quem somos</Link>
            <Link href={"/periodicos-mensais"}>Periódicos</Link>
            <Link href={"/"}>Cursos e Treinamentos</Link>
            <Link href={"/"}>Nossos Professores</Link>
            <Link href={"/"}>Agenda</Link>
          </div>
          <div className={styles.colunas}>
            <Link href={"/"}>Soluções Inovadoras</Link>
            <Link href={"/"}>Canal SGP</Link>
            <Link href={"/"}>Área do Cliente</Link>
            <Link href={"/"}>Documentações</Link>
            <Link href={"/"}>Galeria de Fotos</Link>
          </div>
          <div className={styles.colunas}>
            
            <Link href={"/"}>Trabalhe conosco</Link>
            <Link href={"/"}>Notícias</Link>
            <Link href={"/"}>Contato</Link>
          </div>
          <div className={styles.colunas}>
            {RedesSociaisSGP.map(({ link, name }) => (
              <Link href={link} key={link} className={styles.rede}>
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
          <div>Mapa</div>
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
            <p>Política de Cookies</p>
            <p>Política de Privacidade</p>
            <p>Termo de Consentimento da Privacidade</p>
          </div>

        </div>
      </div>
      <p>{ano} &copy; SGP - Soluções em Gestão Públicas | Todos os direitos reservados </p>
    </footer>
  );
}
