import Head from "next/head";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Contato.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import { FormContato } from "@/typings/FormContato";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RedesSociaisSGP } from "@/utils/redes-socias";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Button from "@/components/Button";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  mensagem: yup.string().required("Campo obrigatório"),
  arquivo: yup.mixed().nullable().required("A file is required"),
  assunto: yup.string().required("Campo obrigatório"),
  celular: yup.string().required("Campo obrigatório"),
  conheceusgp: yup.string().required("Campo obrigatório"),
  dataEnvio: yup.string().required("Campo obrigatório"),
  empresa: yup.string().required("Campo obrigatório"),
  facebook: yup.string().required("Campo obrigatório"),
  telComl: yup.string().required("Campo obrigatório"),
});

const initialValues = {
  nome: "",
  email: "",
  mensagem: "",
  arquivo: "",
  assunto: "",
  celular: "",
  conheceusgp: "",
  dataEnvio: undefined,
  empresa: "",
  facebook: "",
  telComl: "",
};

export default function Contato() {
  const {
    push,
    query: { assuntoForm },
  } = useRouter();
  const captchaRef = useRef(null);

  const [recaptchaResponse, setRecaptchaResponse] = useState<any>();

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    getValues,
    reset,
    setValue,
  } = useForm<FormContato>({
    defaultValues: initialValues,
    mode: "all",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (assuntoForm && assuntoForm.length > 1) {
      setValue("assunto", String(assuntoForm));
    }
  }, [assuntoForm]);

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

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const response = await fetch("/api/verify-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: recaptchaResponse }),
    });

    const result = await response.json();

    try {
      const res = await fetch("/api/sendEmail", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": process.env.NEXT_PUBLIC_TOKEN!,
          "x-source": process.env.NEXT_PUBLIC_URL_SMTP_LOCAWEB!,
          "User-Agent": "locaweb-smtp-nodejs",
        },
        method: "POST",
      });
      const result = await res.json();
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}></div>
      <div className={styles.pageSize}>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <h2>Inicie um contato preenchendo o formulário</h2>
            <span>
              Disponibilizamos vários canais de comunicação e este é um deles
              para que você possa se comunicar mais rápido conosco!
            </span>

            <ul>
              <li>Central de Atendimento</li>
              <li>
                {" "}
                <BsTelephone /> (11) 3237-4232
              </li>
              <li>
                {" "}
                <BsTelephone /> (11) 97443-5898
              </li>
              <li>
                {" "}
                <AiOutlineMail /> atendimento@sgpsolucoes.com.br
              </li>
            </ul>

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

            <Image
              src={"/images/contato/mulher-sorrindo.webp"}
              alt="Bolo de chocolate"
              width={416}
              height={435}
              className={"imgOnHover"}
            />
          </div>
          <form className={styles.formContato} onSubmit={onSubmit}>
            <div>
              <Input
                type="text"
                label="Empresa"
                register={register("empresa")}
                placeholder="Razão social completo"
                error={errors.empresa?.message}
              />
              <Input
                type="text"
                label="Assunto"
                register={register("assunto")}
                error={errors.assunto?.message}
                placeholder="Escolha um assunto"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                label="E-mail"
                register={register("email")}
                error={errors.email?.message}
                placeholder="email@dominio.com.br"
              />
              <Input
                name="nome"
                label="Nome"
                register={register("nome")}
                error={errors.nome?.message}
                placeholder="Nome completo"
              />
            </div>
            <div>
              <Input
                name="telComl"
                type="text"
                label="Telefone"
                register={register("telComl")}
                error={errors.telComl?.message}
                placeholder="(99) 99999-9999"
              />
              <Input
                name="celular"
                label="Celular"
                register={register("celular")}
                error={errors.celular?.message}
                placeholder="(99) 99999-9999"
              />
            </div>
            <div>
              <Input
                name="conheceusgp"
                label="Como conheceu a SGP?"
                register={register("conheceusgp")}
                error={errors.conheceusgp?.message}
                placeholder="Escreva aqui"
              />
              <Input
                name="facebook"
                type="text"
                label="Facebook"
                register={register("facebook")}
                error={errors.facebook?.message}
                placeholder="facebook.com/nomedeusuario"
              />
            </div>
            <div>
              <Input
                name="mensagem"
                type="text"
                label="Mensagem"
                as="textarea"
                register={register("mensagem")}
                error={errors.mensagem?.message}
                placeholder="Descreva sua mensagem de forma detalhada aqui, e logo será respondido."
              />
            </div>
            <div>
              <Input
                name="arquivo"
                as="file"
                label="Anexe seu arquivo"
                register={register("arquivo")}
                error={errors.arquivo?.message}
              />
              <Input
                name="dataEnvio"
                type="date"
                label="Data do envio"
                register={register("dataEnvio")}
                error={errors.dataEnvio?.message}
              />
            </div>
            <div className={styles.informacoes}>
              <p>Campos obrigatórios*</p>
              <p>
                Ao enviar sua mensagem, você autoriza receber comunicações do
                SGP - Soluções em Gestão Pública, podendo cancelar a qualquer
                momento. Consulte nossa{" "}
                <b onClick={() => push("/documentacoes/politica-privacidade")}>
                  Política de Privacidade
                </b>
                .
              </p>
            </div>
            <ReCAPTCHA
              // @ts-ignore
              sitekey={process.env.NEXT_PUBLIC_API_RECAPTCHA_SIE}
              ref={captchaRef}
              onChange={(value) => setRecaptchaResponse(value)}
            />
            <div className={styles.buttonPosition}>
              <Button
                color="grey"
                title="Limpar"
                onClick={() => reset(initialValues)}
              />
              <Button
                color="darkBlue"
                title="Enviar informações"
                disabled={isSubmitting || !isValid}
              />
            </div>
          </form>
        </div>
      </div>
      {/* <WhatsappIcon /> */}
      <FooterCompleto />
    </div>
  );
}
